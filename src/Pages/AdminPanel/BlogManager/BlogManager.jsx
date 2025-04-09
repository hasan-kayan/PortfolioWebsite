import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Load URLs from .env
const API_BASE = import.meta.env.VITE_API_BASE;
const BLOG_API_URL = `${API_BASE}/api/website/blog`;

const initialFormState = {
  id: "",
  title: "",
  content: "",
  tags: "",
  url: "",
  image: null,
};

const BlogManager = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (!token) {
      console.warn("🔐 No token found. Redirecting to login.");
      navigate("/login");
    } else {
      fetchBlogs(token);
    }
  }, [token]);

  const requestWithAuth = async (axiosCall) => {
    try {
      return await axiosCall();
    } catch (err) {
      const isTokenError =
        err?.response?.status === 401 ||
        err?.response?.status === 403 ||
        err?.response?.data?.message === "Invalid or expired token";

      if (isTokenError) {
        console.warn("⚠️ Token expired or invalid. Redirecting to login...");
        localStorage.removeItem("token");
        setToken("");
        navigate("/login");
      } else {
        throw err;
      }
    }
  };

  const fetchBlogs = async (authToken = token) => {
    await requestWithAuth(() =>
      axios
        .get(`${BLOG_API_URL}/get-all-blogs`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((res) => setBlogs(res.data))
    );
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: name === "image" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";

    if (form.image) {
      const fileName = `${Date.now()}_${form.image.name}`;
      const filePath = `Portfolio/Blogs/${fileName}`;
      try {
        imageUrl = await uploadImageToGitHub(form.image, filePath);
      } catch (err) {
        console.error("❌ Image upload failed:", err);
        return;
      }
    }

    const blogPayload = {
      id: form.id,
      title: form.title,
      content: form.content,
      tags: form.tags.split(",").map((tag) => tag.trim()),
      url: form.url,
      images: imageUrl ? [imageUrl] : [],
    };

    try {
      await requestWithAuth(() =>
        editingId
          ? axios.put(`${BLOG_API_URL}/update-blogby/${editingId}`, blogPayload, {
              headers: { Authorization: `Bearer ${token}` },
            })
          : axios.post(`${BLOG_API_URL}/create-blog`, blogPayload, {
              headers: { Authorization: `Bearer ${token}` },
            })
      );

      console.log("✅ Blog saved");
      setForm(initialFormState);
      setEditingId(null);
      fetchBlogs();
    } catch (err) {
      console.error("❌ Blog save failed:", err?.response?.data || err.message);
    }
  };

  const handleEdit = (blog) => {
    setForm({
      id: blog.id || "",
      title: blog.title,
      content: blog.content,
      tags: blog.tags?.join(", ") || "",
      url: blog.url,
      image: null,
    });
    setEditingId(blog.id);
  };

  const handleDelete = async (id) => {
    if (!id) return console.error("❌ Missing blog ID for deletion.");

    try {
      await requestWithAuth(() =>
        axios.delete(`${BLOG_API_URL}/delete-blogby/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      );
      console.log("✅ Blog deleted");
      fetchBlogs();
    } catch (err) {
      console.error("❌ Delete failed:", err?.response?.data || err.message);
    }
  };

  const uploadImageToGitHub = async (file, filePath) => {
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
    const REPO = "hasan-kayan/Assets";
    const API_ENDPOINT = `https://api.github.com/repos/${REPO}/contents/${filePath}`;

    if (!GITHUB_TOKEN) {
      throw new Error("Missing GitHub token.");
    }

    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onload = async () => {
        const content = reader.result.split(",")[1];
        try {
          const res = await axios.put(
            API_ENDPOINT,
            {
              message: `Upload blog image: ${filePath}`,
              content,
            },
            {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
              },
            }
          );
          resolve(res.data.content.download_url);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h2>Blog Manager</h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input name="id" placeholder="Unique Blog ID" value={form.id} onChange={handleChange} required />
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} required />
        <input name="tags" placeholder="Tags (comma-separated)" value={form.tags} onChange={handleChange} />
        <input name="url" placeholder="URL" value={form.url} onChange={handleChange} />
        <input type="file" name="image" accept="image/*" onChange={handleChange} />
        <button type="submit">{editingId ? "Update" : "Create"} Blog</button>
      </form>

      <ul style={{ marginTop: 30, padding: 0, listStyle: "none" }}>
        {blogs.map((blog) => (
          <li key={blog.id} style={{ marginBottom: 30, paddingBottom: 15, borderBottom: "1px solid #ccc" }}>
            <strong>{blog.title}</strong>
            <p>{blog.content}</p>
            <p><b>Tags:</b> {blog.tags?.join(", ")}</p>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">View Blog</a>
            {blog.images?.length > 0 && (
              <div>
                <img src={blog.images[0]} alt="blog" style={{ width: 100, marginTop: 10 }} />
              </div>
            )}
            <div style={{ marginTop: 10 }}>
              <button onClick={() => handleEdit(blog)} style={{ marginRight: 10 }}>Edit</button>
              <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogManager;
