'use client';
import AdminShell from './AdminShell';
import Link from 'next/link';

const sections = [
  { href: '/admin/home', label: 'Home Content', desc: 'Edit hero, stats, about, skills' },
  { href: '/admin/cv', label: 'CV', desc: 'Upload or replace PDF CV' },
  { href: '/admin/projects', label: 'Projects', desc: 'Add, edit, delete projects' },
  { href: '/admin/blog', label: 'Blog', desc: 'Create and manage blog posts' },
  { href: '/admin/contact', label: 'Contact', desc: 'Update contact info & socials' },
];

export default function AdminDashboard() {
  return (
    <AdminShell>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard</h1>
        <p className="admin-page-subtitle">Manage all sections of your portfolio site.</p>
      </div>
      <div className="admin-grid">
        {sections.map(s => (
          <Link key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
            <div className="admin-card" style={{ cursor: 'pointer', transition: 'border-color 0.2s' }}>
              <div className="admin-card-title" style={{ marginBottom: '0.5rem' }}>{s.label}</div>
              <p style={{ fontSize: '0.8rem', color: '#555' }}>{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
