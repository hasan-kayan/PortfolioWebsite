import type { Metadata } from 'next';
import Link from 'next/link';
import { API_URL } from '@/lib/api';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Hardware, software, and system design projects by Hasan Kayan.',
};

interface Project {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_URL}/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch { return []; }
}

const categoryLabel: Record<string, string> = {
  hardware: 'HW',
  software: 'SW',
  system: 'SYS',
  other: 'OTHER',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Work</span>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            A collection of hardware, software, and systems I've designed and built.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className={styles.empty}>
            <span className="section-label">No projects yet</span>
            <p>Check back soon.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {projects.map((p) => (
              <Link key={p._id} href={`/projects/${p._id}`} className={`card ${styles.projectCard}`} id={`project-${p._id}`}>
                <div className={styles.cardHeader}>
                  <span className={`tag tag-accent ${styles.catTag}`}>{categoryLabel[p.category] || 'OTHER'}</span>
                  {p.featured && <span className={`tag ${styles.featuredTag}`}>Featured</span>}
                </div>
                <h2 className={styles.cardTitle}>{p.title}</h2>
                <p className={styles.cardDesc}>{p.description}</p>
                <div className={styles.cardTags}>
                  {p.tags.slice(0, 4).map((t, i) => <span key={i} className="tag">{t}</span>)}
                </div>
                <div className={styles.cardFooter}>
                  {p.githubUrl && <span className={styles.cardLink}>GitHub →</span>}
                  {p.liveUrl && <span className={styles.cardLink}>Live →</span>}
                  <span className={styles.cardArrow}>View →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
