import React, { useEffect, useState } from "react";
import axios from "axios";

// === API Configuration ===
const API_BASE = "https://portfoliobackend-311015061542.europe-west1.run.app";
const API_URL = `${API_BASE}/api/website/project`;
const LOGIN_URL = `${API_BASE}/api/auth/login`;

const DEV_CREDENTIALS = {
  username: "hasankayan2000@hotmail.com",
  password: "IamFeelingGood!@",
};

// === Initial Form State ===
const initialFormState = {
  id: "",
  title: "",
  description: "",
  technologies: "",
  githubLink: "",
  demoLink: "",
  image: "",
};

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("authToken") || "");

  // === EFFECT: Auto login if token is missing ===
  useEffect(() => {
    if (!token) {
      loginAndFetch();
    } else {
      fetchProjects(token);
    }
  }, [token]);

  // === Login and fetch projects ===
  const loginAndFetch = async () => {
    try {
      const res = await axios.post(LOGIN_URL, DEV_CREDENTIALS);
      const newToken = res.data.token;
      setToken(newToken);
      localStorage.setItem("authToken", newToken);
      await fetchProjects(newToken);
      return newToken;
    } catch (err) {
      console.error("Auto-login failed ❌", err);
    }
  };

  // === Fetch projects from API ===
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

  // === Handle form changes ===
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // === Submit form: Create or Update project ===
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: form.id,
      title: form.title,
      description: form.description,
      githubLink: form.githubLink,
      demoLink: form.demoLink,
      technologies: form.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
      images: form.image ? [form.image] : [],
    };

    const trySubmit = async (authToken) => {
      try {
        const res = await axios.post(`${API_URL}/create-project`, payload, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        });

        console.log("✅ Project created:", res.data);
        setForm(initialFormState);
        setEditingId(null);
        fetchProjects(authToken);
      } catch (err) {
        if (err?.response?.status === 401) {
          console.warn("⚠️ Token expired. Logging in again...");
          const refreshedToken = await loginAndFetch();
          if (refreshedToken) {
            trySubmit(refreshedToken); // retry
          }
        } else {
          console.error("❌ Submit error:", err?.response?.data || err.message);
        }
      }
    };

    await trySubmit(token);
  };

  // === Edit existing project ===
  const handleEdit = (project) => {
    setForm({
      id: project.id || "",
      title: project.title || "",
      description: project.description || "",
      technologies: project.technologies?.join(", ") || "",
      githubLink: project.githubLink || "",
      demoLink: project.demoLink || "",
      image: project.images?.[0] || "",
    });
    setEditingId(project._id);
  };

  // === Delete project ===
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

      {/* === Form === */}
      <form onSubmit={handleSubmit}>
        <input
          name="id"
          placeholder="Unique Project ID"
          value={form.id}
          onChange={handleChange}
          required
        />
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          name="technologies"
          placeholder="Technologies (comma-separated)"
          value={form.technologies}
          onChange={handleChange}
        />
        <input
          name="githubLink"
          placeholder="GitHub Link"
          value={form.githubLink}
          onChange={handleChange}
        />
        <input
          name="demoLink"
          placeholder="Demo Link"
          value={form.demoLink}
          onChange={handleChange}
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <button type="submit">
          {editingId ? "Update" : "Create"} Project
        </button>
      </form>

      {/* === Project List === */}
      <ul>
        {projects.map((project) => (
          <li key={project._id} style={{ marginTop: 20 }}>
            <strong>{project.title}</strong>
            <p>{project.description}</p>
            <p>
              <b>Tech:</b> {project.technologies?.join(", ")}
            </p>
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {" | "}
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            )}
            {project.images?.length > 0 && (
              <div>
                <img
                  src={project.images[0]}
                  alt="project"
                  style={{ width: 100, marginTop: 10 }}
                />
              </div>
            )}
            <br />
            <button onClick={() => handleEdit(project)}>Edit</button>
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManager;
