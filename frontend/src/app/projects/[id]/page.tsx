import { API_URL } from '@/lib/api';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

interface Project {
  _id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  createdAt: string;
}

async function getProject(id: string): Promise<Project | null> {
  try {
    const res = await fetch(`${API_URL}/projects/${id}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch { return null; }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) return { title: 'Project Not Found' };
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) notFound();

  return (
    <div className="page-wrapper">
      <div className="container">
        <Link href="/projects" className={styles.back}>← Back to Projects</Link>
        <div className={styles.header}>
          <div className={styles.headerMeta}>
            <span className="tag tag-accent">{project.category.toUpperCase()}</span>
            {project.featured && <span className="tag">Featured</span>}
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.desc}>{project.description}</p>
        </div>

        {project.tags.length > 0 && (
          <div className={styles.tags}>
            {project.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
          </div>
        )}

        {project.longDescription && (
          <div className={styles.body}>
            <p>{project.longDescription}</p>
          </div>
        )}

        <div className={styles.links}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" id="project-github-link">
              GitHub Repository →
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="project-live-link">
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
