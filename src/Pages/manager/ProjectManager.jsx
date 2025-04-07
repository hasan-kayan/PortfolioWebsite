import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "https://portfoliobackend-311015061542.europe-west1.run.app";
const API_URL = `${API_BASE}/api/website/project`;
const LOGIN_URL = `${API_BASE}/api/auth/login`;

const DEV_CREDENTIALS = {
  username: "hasankayan2000@hotmail.com",
  password: "IamFeelingGood!@",
};

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
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("authToken") || "");

  useEffect(() => {
    if (!token) {
      loginAndFetch();
    } else {
      fetchProjects(token);
    }
  }, [token]);

  const loginAndFetch = async () => {
    try {
      const res = await axios.post(LOGIN_URL, DEV_CREDENTIALS);
      const newToken = res.data.token;
      setToken(newToken);
      localStorage.setItem("authToken", newToken);
      fetchProjects(newToken);
    } catch (err) {
      console.error("Auto-login failed ❌", err);
    }
  };

  const fetchProjects = async (authToken = token) => {
    try {
      const res = await axios.get(`${API_URL}/get-all-projects`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setProjects(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
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
    const formData = new FormData();

    // Ensure all required fields are included
    formData.append("id", form.id);
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("githubLink", form.githubLink);
    formData.append("demoLink", form.demoLink);
    formData.append("technologies", JSON.stringify(form.technologies.split(",")));
    if (form.image) formData.append("image", form.image);

    // Debug log
    for (let [key, value] of formData.entries()) {
      console.log(`🧾 ${key}:`, value);
    }

    try {
      const res = editingId
        ? await axios.put(`${API_URL}/update-projectby/${editingId}`, formData, {
            headers: { Authorization: `Bearer ${token}` },
          })
        : await axios.post(`${API_URL}/create-project`, formData, {
            headers: { Authorization: `Bearer ${token}` },
          });

      console.log("✅ Project saved:", res.data);
      setForm(initialFormState);
      setEditingId(null);
      fetchProjects();
    } catch (err) {
      console.error("❌ Submit error:", err?.response?.data || err.message);
    }
  };

  const handleEdit = (project) => {
    setForm({
      id: project.id || "",
      title: project.title,
      description: project.description,
      technologies: project.technologies?.join(",") || "",
      githubLink: project.githubLink,
      demoLink: project.demoLink,
      image: null,
    });
    setEditingId(project._id);
  };

  const handleDelete = async (mongoId) => {
    if (!mongoId) return console.error("❌ Missing _id for deletion.");

    try {
      const res = await axios.delete(`${API_URL}/delete-projectby/${mongoId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("✅ Delete response:", res.data);
      fetchProjects();
    } catch (err) {
      console.error("❌ Delete failed:", err?.response?.data || err.message);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h2>Project Manager</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input name="id" placeholder="Unique Project ID" value={form.id} onChange={handleChange} required />
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input name="technologies" placeholder="Technologies (comma-separated)" value={form.technologies} onChange={handleChange} />
        <input name="githubLink" placeholder="GitHub Link" value={form.githubLink} onChange={handleChange} />
        <input name="demoLink" placeholder="Demo Link" value={form.demoLink} onChange={handleChange} />
        <input type="file" name="image" accept="image/*" onChange={handleChange} />
        <button type="submit">{editingId ? "Update" : "Create"} Project</button>
      </form>

      <ul>
        {projects.map((project) => (
          <li key={project._id} style={{ marginTop: 20 }}>
            <strong>{project.title}</strong>
            <p>{project.description}</p>
            <p><b>Tech:</b> {project.technologies?.join(", ")}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
            {project.images?.length > 0 && (
              <div>
                <img src={project.images[0]} alt="project" style={{ width: 100, marginTop: 10 }} />
              </div>
            )}
            <br />
            <button onClick={() => handleEdit(project)}>Edit</button>
            <button onClick={() => handleDelete(project._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManager;
