'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_URL } from '@/lib/api';
import styles from './login.module.css';

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Invalid credentials');
      const data = await res.json();
      localStorage.setItem('admin_token', data.token);
      router.push('/admin');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally { setLoading(false); }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <span className={styles.mark}>HK</span>
          <span className={styles.brand}>Admin Panel</span>
        </div>
        <h1 className={styles.title}>Sign In</h1>
        <form onSubmit={submit} className={styles.form}>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="admin-email">Email</label>
            <input
              id="admin-email"
              type="email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              required
              className="admin-form-input"
              placeholder="admin@example.com"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              required
              className="admin-form-input"
              placeholder="••••••••"
            />
          </div>
          {error && <div className="admin-status-error">{error}</div>}
          <button type="submit" className="admin-btn admin-btn-primary" disabled={loading} id="admin-login-btn">
            {loading ? 'Signing in...' : 'Sign In →'}
          </button>
        </form>
      </div>
    </div>
  );
}
