import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>HK</span>
          <p className={styles.copy}>© {year} Hasan Kayan. All rights reserved.</p>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          {[['/', 'Home'], ['/projects', 'Projects'], ['/blog', 'Blog'], ['/cv', 'CV'], ['/contact', 'Contact']].map(([href, label]) => (
            <Link key={href} href={href} className={styles.link}>{label}</Link>
          ))}
        </nav>
        <div className={styles.right}>
          <span className={styles.statusDot}></span>
          <span className={styles.statusText}>Open to opportunities</span>
        </div>
      </div>
    </footer>
  );
}
