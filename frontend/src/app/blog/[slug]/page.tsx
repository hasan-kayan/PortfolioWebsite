import { API_URL } from '@/lib/api';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import { marked } from 'marked';

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  publishedAt: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(`${API_URL}/blog/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch { return null; }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const html = await marked(post.content || '');

  return (
    <div className="page-wrapper">
      <div className="container">
        <Link href="/blog" className={styles.back}>← Back to Blog</Link>
        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.meta}>
              <time className={styles.date} dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <div className={styles.tags}>
                {post.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
              </div>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
          </header>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </div>
  );
}
