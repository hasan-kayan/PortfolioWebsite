'use client';
import { useState, useEffect, useCallback } from 'react';
import AdminShell from '../AdminShell';
import { API_URL, getAuthHeaders } from '@/lib/api';

interface Project {
  _id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  order: number;
}

const empty: Omit<Project, '_id'> = {
  title: '', description: '', longDescription: '',
  tags: [], category: 'software', githubUrl: '', liveUrl: '', featured: false, order: 0,
};

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState<Omit<Project, '_id'>>(empty);
  const [editId, setEditId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');

  const load = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/projects`);
      if (res.ok) setProjects(await res.json());
    } catch { /* empty */ }
  }, []);

  useEffect(() => { load(); }, [load]);

  const save = async () => {
    setSaving(true);
    try {
      const url = editId ? `${API_URL}/projects/${editId}` : `${API_URL}/projects`;
      const res = await fetch(url, {
        method: editId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify({ ...form, tags: typeof form.tags === 'string' ? (form.tags as unknown as string).split(',').map((s: string) => s.trim()).filter(Boolean) : form.tags }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm(empty);
      setEditId(null);
      await load();
    } catch { setStatus('error'); }
    setSaving(false);
    setTimeout(() => setStatus(''), 2000);
  };

  const del = async (id: string) => {
    if (!confirm('Delete this project?')) return;
    await fetch(`${API_URL}/projects/${id}`, { method: 'DELETE', headers: getAuthHeaders() });
    await load();
  };

  const edit = (p: Project) => {
    setForm({ title: p.title, description: p.description, longDescription: p.longDescription, tags: p.tags, category: p.category, githubUrl: p.githubUrl, liveUrl: p.liveUrl, featured: p.featured, order: p.order });
    setEditId(p._id);
  };

  return (
    <AdminShell>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Projects</h1>
        <p className="admin-page-subtitle">Add, edit, and delete portfolio projects.</p>
      </div>

      {/* Form */}
      <div className="admin-card" style={{ marginBottom: '2rem' }}>
        <div className="admin-card-header">
          <span className="admin-card-title">{editId ? 'Edit Project' : 'New Project'}</span>
          {editId && <button className="admin-btn admin-btn-outline admin-btn-sm" onClick={() => { setEditId(null); setForm(empty); }}>Cancel</button>}
        </div>
        <div className="admin-form">
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label className="admin-form-label">Title *</label>
              <input className="admin-form-input" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Category</label>
              <select className="admin-form-input" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                <option value="software">Software</option>
                <option value="hardware">Hardware</option>
                <option value="system">System</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label">Short Description *</label>
            <textarea className="admin-form-input" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={2} />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label">Long Description</label>
            <textarea className="admin-form-input" value={form.longDescription} onChange={e => setForm(f => ({ ...f, longDescription: e.target.value }))} rows={4} />
          </div>
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label className="admin-form-label">Tags (comma separated)</label>
              <input className="admin-form-input" value={Array.isArray(form.tags) ? form.tags.join(', ') : form.tags} onChange={e => setForm(f => ({ ...f, tags: e.target.value as unknown as string[] }))} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Order</label>
              <input type="number" className="admin-form-input" value={form.order} onChange={e => setForm(f => ({ ...f, order: Number(e.target.value) }))} />
            </div>
          </div>
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label className="admin-form-label">GitHub URL</label>
              <input className="admin-form-input" value={form.githubUrl} onChange={e => setForm(f => ({ ...f, githubUrl: e.target.value }))} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Live URL</label>
              <input className="admin-form-input" value={form.liveUrl} onChange={e => setForm(f => ({ ...f, liveUrl: e.target.value }))} />
            </div>
          </div>
          <label className="admin-toggle">
            <input type="checkbox" checked={form.featured} onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))} />
            Featured Project
          </label>
          {status === 'success' && <div className="admin-status-success">Saved.</div>}
          {status === 'error' && <div className="admin-status-error">Error saving project.</div>}
          <button className="admin-btn admin-btn-primary" onClick={save} disabled={saving || !form.title} id="admin-project-save-btn">
            {saving ? 'Saving...' : editId ? 'Update Project' : 'Add Project'}
          </button>
        </div>
      </div>

      {/* List */}
      <div className="admin-card">
        <div className="admin-card-header"><span className="admin-card-title">All Projects ({projects.length})</span></div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(p => (
              <tr key={p._id}>
                <td style={{ color: '#f0f0f0' }}>{p.title}</td>
                <td><span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.7rem', textTransform: 'uppercase' }}>{p.category}</span></td>
                <td>{p.featured ? '✓' : '—'}</td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="admin-btn admin-btn-outline admin-btn-sm" onClick={() => edit(p)}>Edit</button>
                    <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => del(p._id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr><td colSpan={4} style={{ textAlign: 'center', color: '#555', padding: '2rem' }}>No projects yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
