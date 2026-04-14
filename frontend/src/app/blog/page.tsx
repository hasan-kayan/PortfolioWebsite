import type { Metadata } from 'next';
import Link from 'next/link';
import { API_URL } from '@/lib/api';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles on electronics engineering, software development, and system design by Hasan Kayan.',
};

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  coverImage: string;
}

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${API_URL}/blog`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch { return []; }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Writing</span>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>Thoughts on engineering, software, and building things that work.</p>
        </div>

        {posts.length === 0 ? (
          <div className={styles.empty}>
            <span className="section-label">No posts yet</span>
            <p>Check back soon.</p>
          </div>
        ) : (
          <div className={styles.list}>
            {posts.map(post => (
              <Link key={post._id} href={`/blog/${post.slug}`} className={styles.postCard} id={`blog-${post._id}`}>
                <div className={styles.postMeta}>
                  <span className={styles.postDate}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <div className={styles.postTags}>
                    {post.tags.slice(0, 3).map((t, i) => <span key={i} className="tag">{t}</span>)}
                  </div>
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                {post.excerpt && <p className={styles.postExcerpt}>{post.excerpt}</p>}
                <span className={styles.readMore}>Read article →</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
