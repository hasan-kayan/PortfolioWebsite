'use client';
import { useState, useEffect, useCallback } from 'react';
import AdminShell from '../AdminShell';
import { API_URL, getAuthHeaders } from '@/lib/api';

interface ContactData {
  email: string;
  phone: string;
  location: string;
  availability: string;
  socials: { github: string; linkedin: string; twitter: string; instagram: string; };
}

const defaultData: ContactData = {
  email: '', phone: '', location: '', availability: 'Open to opportunities',
  socials: { github: '', linkedin: '', twitter: '', instagram: '' },
};

export default function AdminContactPage() {
  const [data, setData] = useState<ContactData>(defaultData);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  const load = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/contact`);
      if (res.ok) {
        const json = await res.json();
        setData({ ...defaultData, ...json, socials: { ...defaultData.socials, ...json.socials } });
      }
    } catch { /* use default */ }
  }, []);

  useEffect(() => { load(); }, [load]);

  const save = async () => {
    setStatus('saving');
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2000);
    } catch { setStatus('error'); }
  };

  return (
    <AdminShell>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Contact Info</h1>
        <p className="admin-page-subtitle">Update contact details and social links.</p>
      </div>
      <div className="admin-form">
        <div className="admin-card">
          <div className="admin-card-header"><span className="admin-card-title">Contact Details</span></div>
          <div className="admin-form" style={{ gap: '1rem' }}>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label">Email</label>
                <input className="admin-form-input" type="email" value={data.email} onChange={e => setData(d => ({ ...d, email: e.target.value }))} />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Phone</label>
                <input className="admin-form-input" value={data.phone} onChange={e => setData(d => ({ ...d, phone: e.target.value }))} />
              </div>
            </div>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-form-label">Location</label>
                <input className="admin-form-input" value={data.location} onChange={e => setData(d => ({ ...d, location: e.target.value }))} />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Availability Status</label>
                <input className="admin-form-input" value={data.availability} onChange={e => setData(d => ({ ...d, availability: e.target.value }))} />
              </div>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-header"><span className="admin-card-title">Social Links</span></div>
          <div className="admin-form" style={{ gap: '1rem' }}>
            {(['github', 'linkedin', 'twitter', 'instagram'] as const).map(key => (
              <div key={key} className="admin-form-group">
                <label className="admin-form-label">{key.charAt(0).toUpperCase() + key.slice(1)} URL</label>
                <input
                  className="admin-form-input"
                  value={data.socials[key]}
                  onChange={e => setData(d => ({ ...d, socials: { ...d.socials, [key]: e.target.value } }))}
                  placeholder={`https://${key}.com/username`}
                />
              </div>
            ))}
          </div>
        </div>

        {status === 'saved' && <div className="admin-status-success">Contact info saved.</div>}
        {status === 'error' && <div className="admin-status-error">Save failed.</div>}

        <button className="admin-btn admin-btn-primary" onClick={save} disabled={status === 'saving'} id="admin-contact-save-btn">
          {status === 'saving' ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </AdminShell>
  );
}
