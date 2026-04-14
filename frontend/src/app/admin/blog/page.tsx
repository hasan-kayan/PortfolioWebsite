'use client';
import { useState, useEffect, useCallback } from 'react';
import AdminShell from '../AdminShell';
import { API_URL, getAuthHeaders } from '@/lib/api';

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  published: boolean;
  publishedAt: string;
}

const empty: Omit<Post, '_id'> = {
  title: '', slug: '', excerpt: '', content: '', tags: [], published: false, publishedAt: new Date().toISOString(),
};

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState<Omit<Post, '_id'>>(empty);
  const [editId, setEditId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');
  const [view, setView] = useState<'list' | 'form'>('list');

  const load = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/blog?published=all`, { headers: getAuthHeaders() });
      if (res.ok) setPosts(await res.json());
    } catch { /* empty */ }
  }, []);

  useEffect(() => { load(); }, [load]);

  const save = async () => {
    setSaving(true);
    const payload = {
      ...form,
      tags: typeof form.tags === 'string' ? (form.tags as unknown as string).split(',').map((s: string) => s.trim()).filter(Boolean) : form.tags,
    };
    try {
      const url = editId ? `${API_URL}/blog/${editId}` : `${API_URL}/blog`;
      const res = await fetch(url, {
        method: editId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm(empty);
      setEditId(null);
      setView('list');
      await load();
    } catch { setStatus('error'); }
    setSaving(false);
    setTimeout(() => setStatus(''), 2000);
  };

  const del = async (id: string) => {
    if (!confirm('Delete this post?')) return;
    await fetch(`${API_URL}/blog/${id}`, { method: 'DELETE', headers: getAuthHeaders() });
    await load();
  };

  const edit = (p: Post) => {
    setForm({ title: p.title, slug: p.slug, excerpt: p.excerpt, content: p.content, tags: p.tags, published: p.published, publishedAt: p.publishedAt });
    setEditId(p._id);
    setView('form');
  };

  const newPost = () => { setForm(empty); setEditId(null); setView('form'); };

  if (view === 'form') return (
    <AdminShell>
      <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <div>
          <h1 className="admin-page-title">{editId ? 'Edit Post' : 'New Post'}</h1>
        </div>
        <button className="admin-btn admin-btn-outline admin-btn-sm" onClick={() => { setView('list'); setEditId(null); setForm(empty); }}>← Back to List</button>
      </div>
      <div className="admin-form">
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">Title *</label>
            <input className="admin-form-input" value={form.title} onChange={e => {
              const t = e.target.value;
              setForm(f => ({ ...f, title: t, slug: f.slug || slugify(t) }));
            }} />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label">Slug *</label>
            <input className="admin-form-input" value={form.slug} onChange={e => setForm(f => ({ ...f, slug: slugify(e.target.value) }))} />
          </div>
        </div>
        <div className="admin-form-group">
          <label className="admin-form-label">Excerpt</label>
          <textarea className="admin-form-input" value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} rows={2} />
        </div>
        <div className="admin-form-group">
          <label className="admin-form-label">Content (Markdown)</label>
          <textarea className="admin-form-input" value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} rows={16} style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.8rem' }} />
        </div>
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">Tags (comma separated)</label>
            <input className="admin-form-input" value={Array.isArray(form.tags) ? form.tags.join(', ') : form.tags} onChange={e => setForm(f => ({ ...f, tags: e.target.value as unknown as string[] }))} />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label">Published At</label>
            <input type="date" className="admin-form-input" value={form.publishedAt.split('T')[0]} onChange={e => setForm(f => ({ ...f, publishedAt: new Date(e.target.value).toISOString() }))} />
          </div>
        </div>
        <label className="admin-toggle">
          <input type="checkbox" checked={form.published} onChange={e => setForm(f => ({ ...f, published: e.target.checked }))} />
          Published (visible on site)
        </label>
        {status === 'success' && <div className="admin-status-success">Post saved.</div>}
        {status === 'error' && <div className="admin-status-error">Error saving post.</div>}
        <button className="admin-btn admin-btn-primary" onClick={save} disabled={saving || !form.title || !form.slug} id="admin-blog-save-btn">
          {saving ? 'Saving...' : editId ? 'Update Post' : 'Publish Post'}
        </button>
      </div>
    </AdminShell>
  );

  return (
    <AdminShell>
      <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <div>
          <h1 className="admin-page-title">Blog</h1>
          <p className="admin-page-subtitle">Manage your blog posts.</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={newPost} id="admin-blog-new-btn">+ New Post</button>
      </div>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr><th>Title</th><th>Slug</th><th>Published</th><th>Date</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {posts.map(p => (
              <tr key={p._id}>
                <td style={{ color: '#f0f0f0' }}>{p.title}</td>
                <td style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.7rem' }}>{p.slug}</td>
                <td>{p.published ? <span style={{ color: '#4d9e75' }}>✓</span> : <span style={{ color: '#555' }}>Draft</span>}</td>
                <td>{new Date(p.publishedAt).toLocaleDateString()}</td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="admin-btn admin-btn-outline admin-btn-sm" onClick={() => edit(p)}>Edit</button>
                    <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => del(p._id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr><td colSpan={5} style={{ textAlign: 'center', color: '#555', padding: '2rem' }}>No posts yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
