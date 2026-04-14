'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  if (pathname.startsWith('/admin')) return null;

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>HK</span>
          <span className={styles.logoText}>Hasan Kayan</span>
        </Link>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {navLinks.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={open ? styles.barTop : ''}></span>
          <span className={open ? styles.barMid : ''}></span>
          <span className={open ? styles.barBot : ''}></span>
        </button>
      </div>
    </nav>
  );
}
