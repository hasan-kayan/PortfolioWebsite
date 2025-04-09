import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Load from .env
const API_BASE = import.meta.env.VITE_API_BASE;
const PROJECT_API_URL = `${API_BASE}/api/website/project`;

const initialFormState = {
  id: "",
  title: "",
  description: "",
  technologies: "",
  githubLink: "",
  demoLink: "",
  image: null,
};

const ProjectManager = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (!token) {
      console.warn("🔐 No token found. Redirecting to login.");
      navigate("/login");
    } else {
      fetchProjects(token);
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

  const fetchProjects = async (authToken = token) => {
    await requestWithAuth(() =>
      axios
        .get(`${PROJECT_API_URL}/get-all-projects`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((res) => setProjects(res.data))
    );
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: name === "image" ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (form.image) {
      const fileName = `${Date.now()}_${form.image.name}`;
      const filePath = `Portfolio/Projects/${fileName}`;

      try {
        imageUrl = await uploadImageToGitHub(form.image, filePath);
        console.log("✅ Uploaded Image URL:", imageUrl);
      } catch (err) {
        console.error("❌ GitHub upload error:", err);
        return;
      }
    }

    const payload = {
      id: form.id,
      title: form.title,
      description: form.description,
      githubLink: form.githubLink,
      demoLink: form.demoLink,
      technologies: form.technologies.split(",").map((t) => t.trim()),
      images: imageUrl ? [imageUrl] : [],
    };

    try {
      await requestWithAuth(() =>
        editingId
          ? axios.put(`${PROJECT_API_URL}/update-projectby/${editingId}`, payload, {
              headers: { Authorization: `Bearer ${token}` },
            })
          : axios.post(`${PROJECT_API_URL}/create-project`, payload, {
              headers: { Authorization: `Bearer ${token}` },
            })
      );

      console.log("✅ Project saved");
      resetForm();
      fetchProjects();
    } catch (err) {
      console.error("❌ Submit error:", err?.response?.data || err.message);
    }
  };

  const resetForm = () => {
    setForm(initialFormState);
    setEditingId(null);
  };

  const handleEdit = (project) => {
    setForm({
      id: project.id || "",
      title: project.title,
      description: project.description,
      technologies: project.technologies?.join(", ") || "",
      githubLink: project.githubLink,
      demoLink: project.demoLink,
      image: null,
    });
    setEditingId(project._id);
  };

  const handleDelete = async (mongoId) => {
    if (!mongoId) return console.error("❌ Missing _id for deletion.");

    try {
      await requestWithAuth(() =>
        axios.delete(`${PROJECT_API_URL}/delete-projectby/${mongoId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      );
      console.log("✅ Project deleted");
      fetchProjects();
    } catch (err) {
      console.error("❌ Delete failed:", err?.response?.data || err.message);
    }
  };

  const uploadImageToGitHub = async (file, filePath) => {
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
    const REPO = "hasan-kayan/Assets";
    const API_ENDPOINT = `https://api.github.com/repos/${REPO}/contents/${filePath}`;

    if (!GITHUB_TOKEN) throw new Error("Missing GitHub token.");

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const content = reader.result.split(",")[1];
        try {
          const res = await axios.put(
            API_ENDPOINT,
            {
              message: `Upload project image: ${filePath}`,
              content,
            },
            {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
              },
            }
          );

          const downloadUrl = res.data?.content?.download_url;
          if (!downloadUrl) return reject("No download_url found");
          resolve(downloadUrl);
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
      <h2>Project Manager</h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input name="id" placeholder="Unique Project ID" value={form.id} onChange={handleChange} required />
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input name="technologies" placeholder="Technologies (comma-separated)" value={form.technologies} onChange={handleChange} />
        <input name="githubLink" placeholder="GitHub Link" value={form.githubLink} onChange={handleChange} />
        <input name="demoLink" placeholder="Demo Link" value={form.demoLink} onChange={handleChange} />
        <input type="file" name="image" accept="image/*" onChange={handleChange} />
        <button type="submit">{editingId ? "Update" : "Create"} Project</button>
      </form>

      <ul style={{ marginTop: 30, padding: 0, listStyle: "none" }}>
        {projects.map((project) => (
          <li key={project._id} style={{ marginBottom: 30, paddingBottom: 15, borderBottom: "1px solid #ccc" }}>
            <strong>{project.title}</strong>
            <p>{project.description}</p>
            <p><b>Tech:</b> {project.technologies?.join(", ")}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
            {project.images?.length > 0 && (
              <div>
                <img src={project.images[0]} alt="project" style={{ width: 100, marginTop: 10 }} />
              </div>
            )}
            <div style={{ marginTop: 10 }}>
              <button onClick={() => handleEdit(project)} style={{ marginRight: 10 }}>Edit</button>
              <button onClick={() => handleDelete(project.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManager;
