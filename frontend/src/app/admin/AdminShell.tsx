'use client';
import { useEffect, useState, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { API_URL, getAuthHeaders } from '@/lib/api';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '◈' },
  { href: '/admin/home', label: 'Home', icon: '⌂' },
  { href: '/admin/cv', label: 'CV', icon: '⊡' },
  { href: '/admin/projects', label: 'Projects', icon: '◉' },
  { href: '/admin/blog', label: 'Blog', icon: '◧' },
  { href: '/admin/contact', label: 'Contact', icon: '◎' },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  const verify = useCallback(async () => {
    const token = localStorage.getItem('admin_token');
    if (!token) { router.push('/admin/login'); return; }
    try {
      const res = await fetch(`${API_URL}/auth/verify`, { headers: getAuthHeaders() });
      if (!res.ok) throw new Error();
      setChecked(true);
    } catch {
      localStorage.removeItem('admin_token');
      router.push('/admin/login');
    }
  }, [router]);

  useEffect(() => { verify(); }, [verify]);

  const logout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
  };

  if (!checked) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#080808', color: '#555', fontFamily: 'Space Mono, monospace', fontSize: '0.75rem' }}>
        Verifying...
      </div>
    );
  }

  return (
    <div className="admin-root">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <span className="admin-sidebar-mark">HK</span>
          <span className="admin-sidebar-title">Admin</span>
        </div>
        <nav className="admin-nav">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`admin-nav-link ${pathname === item.href ? 'active' : ''}`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="admin-logout">
          <button onClick={logout} id="admin-logout-btn">Sign Out</button>
        </div>
      </aside>
      <main className="admin-content">{children}</main>
    </div>
  );
}
