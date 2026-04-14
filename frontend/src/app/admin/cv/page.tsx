'use client';
import { useState, useEffect, useCallback } from 'react';
import AdminShell from '../AdminShell';
import { API_URL, getAuthHeaders } from '@/lib/api';

interface CVInfo { filename: string; uploadedAt: string; downloadCount: number; }

export default function AdminCVPage() {
  const [cv, setCv] = useState<CVInfo | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const load = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/cv`);
      if (res.ok) setCv(await res.json());
    } catch { /* no cv */ }
  }, []);

  useEffect(() => { load(); }, [load]);

  const upload = async () => {
    if (!file) return;
    setStatus('uploading');
    const form = new FormData();
    form.append('cv', file);
    try {
      const res = await fetch(`${API_URL}/cv/upload`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: form,
      });
      if (!res.ok) throw new Error('Upload failed');
      setStatus('success');
      setMessage('CV uploaded successfully.');
      setFile(null);
      await load();
    } catch (err: unknown) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Upload failed');
    }
  };

  return (
    <AdminShell>
      <div className="admin-page-header">
        <h1 className="admin-page-title">CV Management</h1>
        <p className="admin-page-subtitle">Upload your CV as a PDF. Replaces the existing one.</p>
      </div>

      {cv && (
        <div className="admin-card" style={{ marginBottom: '1.5rem' }}>
          <div className="admin-card-header"><span className="admin-card-title">Current CV</span></div>
          <table className="admin-table">
            <tbody>
              <tr>
                <td style={{ color: '#9a9a9a', fontFamily: 'Space Mono, monospace', fontSize: '0.75rem' }}>File</td>
                <td>{cv.filename}</td>
              </tr>
              <tr>
                <td style={{ color: '#9a9a9a', fontFamily: 'Space Mono, monospace', fontSize: '0.75rem' }}>Uploaded</td>
                <td>{new Date(cv.uploadedAt).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td style={{ color: '#9a9a9a', fontFamily: 'Space Mono, monospace', fontSize: '0.75rem' }}>Downloads</td>
                <td>{cv.downloadCount}</td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
            <a href={`${API_URL}/cv/file`} target="_blank" rel="noopener noreferrer" className="admin-btn admin-btn-outline admin-btn-sm" id="admin-cv-view-btn">View PDF</a>
            <a href={`${API_URL}/cv/file?download=true`} className="admin-btn admin-btn-outline admin-btn-sm" id="admin-cv-download-btn">Download</a>
          </div>
        </div>
      )}

      <div className="admin-card">
        <div className="admin-card-header"><span className="admin-card-title">Upload New CV</span></div>
        <div className="admin-form-group" style={{ marginBottom: '1rem' }}>
          <label className="admin-form-label">PDF File</label>
          <input
            type="file"
            accept="application/pdf"
            className="admin-form-input"
            onChange={e => setFile(e.target.files?.[0] || null)}
            id="admin-cv-file-input"
          />
        </div>
        {status === 'success' && <div className="admin-status-success" style={{ marginBottom: '1rem' }}>{message}</div>}
        {status === 'error' && <div className="admin-status-error" style={{ marginBottom: '1rem' }}>{message}</div>}
        <button
          className="admin-btn admin-btn-primary"
          onClick={upload}
          disabled={!file || status === 'uploading'}
          id="admin-cv-upload-btn"
        >
          {status === 'uploading' ? 'Uploading...' : 'Upload CV'}
        </button>
      </div>
    </AdminShell>
  );
}
