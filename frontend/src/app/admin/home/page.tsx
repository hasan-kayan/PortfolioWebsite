'use client';
import { useState, useEffect, useCallback } from 'react';
import AdminShell from '../AdminShell';
import { API_URL, getAuthHeaders } from '@/lib/api';

interface Stat { label: string; value: string; }
interface Skill { category: string; items: string[]; }
interface HomeData {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  stats: Stat[];
  aboutTitle: string;
  aboutText: string;
  skills: Skill[];
}

export default function AdminHomePage() {
  const [data, setData] = useState<HomeData>({
    heroTitle: '', heroSubtitle: '', heroDescription: '',
    stats: [], aboutTitle: '', aboutText: '', skills: [],
  });
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  const load = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/home`);
      const json = await res.json();
      setData(json);
    } catch { /* use default */ }
  }, []);

  useEffect(() => { load(); }, [load]);

  const save = async () => {
    setStatus('saving');
    try {
      const res = await fetch(`${API_URL}/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2000);
    } catch { setStatus('error'); }
  };

  const updateStat = (i: number, key: keyof Stat, val: string) => {
    const stats = [...data.stats];
    stats[i] = { ...stats[i], [key]: val };
    setData(d => ({ ...d, stats }));
  };
  const addStat = () => setData(d => ({ ...d, stats: [...d.stats, { label: '', value: '' }] }));
  const removeStat = (i: number) => setData(d => ({ ...d, stats: d.stats.filter((_, idx) => idx !== i) }));

  const updateSkillCategory = (i: number, val: string) => {
    const skills = [...data.skills];
    skills[i] = { ...skills[i], category: val };
    setData(d => ({ ...d, skills }));
  };
  const updateSkillItems = (i: number, val: string) => {
    const skills = [...data.skills];
    skills[i] = { ...skills[i], items: val.split(',').map(s => s.trim()).filter(Boolean) };
    setData(d => ({ ...d, skills }));
  };
  const addSkill = () => setData(d => ({ ...d, skills: [...d.skills, { category: '', items: [] }] }));
  const removeSkill = (i: number) => setData(d => ({ ...d, skills: d.skills.filter((_, idx) => idx !== i) }));

  return (
    <AdminShell>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Home Content</h1>
        <p className="admin-page-subtitle">Edit the hero, stats, about section, and skills.</p>
      </div>

      <div className="admin-form">
        {/* Hero */}
        <div className="admin-card">
          <div className="admin-card-header"><span className="admin-card-title">Hero Section</span></div>
          <div className="admin-form" style={{ gap: '1rem' }}>
            <div className="admin-form-group">
              <label className="admin-form-label">Hero Title (use \n for line breaks)</label>
              <input className="admin-form-input" value={data.heroTitle} onChange={e => setData(d => ({ ...d, heroTitle: e.target.value }))} placeholder="ENGINEER.\nDESIGNER.\nBUILDER." />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Subtitle</label>
              <input className="admin-form-input" value={data.heroSubtitle} onChange={e => setData(d => ({ ...d, heroSubtitle: e.target.value }))} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Description</label>
              <textarea className="admin-form-input" value={data.heroDescription} onChange={e => setData(d => ({ ...d, heroDescription: e.target.value }))} rows={3} />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="admin-card">
          <div className="admin-card-header">
            <span className="admin-card-title">Stats</span>
            <button className="admin-btn admin-btn-outline admin-btn-sm" onClick={addStat}>+ Add Stat</button>
          </div>
          {data.stats.map((s, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'end' }}>
              <div className="admin-form-group">
                <label className="admin-form-label">Label</label>
                <input className="admin-form-input" value={s.label} onChange={e => updateStat(i, 'label', e.target.value)} />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Value</label>
                <input className="admin-form-input" value={s.value} onChange={e => updateStat(i, 'value', e.target.value)} />
              </div>
              <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => removeStat(i)}>✕</button>
            </div>
          ))}
        </div>

        {/* About */}
        <div className="admin-card">
          <div className="admin-card-header"><span className="admin-card-title">About Section</span></div>
          <div className="admin-form" style={{ gap: '1rem' }}>
            <div className="admin-form-group">
              <label className="admin-form-label">Title</label>
              <input className="admin-form-input" value={data.aboutTitle} onChange={e => setData(d => ({ ...d, aboutTitle: e.target.value }))} />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Text</label>
              <textarea className="admin-form-input" value={data.aboutText} onChange={e => setData(d => ({ ...d, aboutText: e.target.value }))} rows={4} />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="admin-card">
          <div className="admin-card-header">
            <span className="admin-card-title">Skills</span>
            <button className="admin-btn admin-btn-outline admin-btn-sm" onClick={addSkill}>+ Add Category</button>
          </div>
          {data.skills.map((s, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr auto', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'end' }}>
              <div className="admin-form-group">
                <label className="admin-form-label">Category</label>
                <input className="admin-form-input" value={s.category} onChange={e => updateSkillCategory(i, e.target.value)} />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Items (comma separated)</label>
                <input className="admin-form-input" value={s.items.join(', ')} onChange={e => updateSkillItems(i, e.target.value)} />
              </div>
              <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => removeSkill(i)}>✕</button>
            </div>
          ))}
        </div>

        {status === 'saved' && <div className="admin-status-success">Saved successfully.</div>}
        {status === 'error' && <div className="admin-status-error">Save failed. Please try again.</div>}

        <button className="admin-btn admin-btn-primary" onClick={save} disabled={status === 'saving'} id="admin-home-save-btn">
          {status === 'saving' ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </AdminShell>
  );
}
