import type { Metadata } from 'next';
import { API_URL } from '@/lib/api';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'CV',
  description: 'View and download the CV of Hasan Kayan — electronics engineer and full-stack developer.',
};

async function hasCv(): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/cv`, { next: { revalidate: 30 } });
    return res.ok;
  } catch { return false; }
}

export default async function CVPage() {
  const cvAvailable = await hasCv();
  const cvUrl = `${API_URL}/cv/file`;

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Curriculum Vitae</span>
          <h1 className={styles.title}>My CV</h1>
          <p className={styles.subtitle}>
            View my experience, education, and skills. Download for offline access.
          </p>
        </div>

        {cvAvailable ? (
          <div className={styles.cvWrapper}>
            <div className={styles.toolbar}>
              <span className={styles.toolbarLabel}>Hasan_Kayan_CV.pdf</span>
              <a
                href={`${cvUrl}?download=true`}
                className="btn btn-primary"
                download
                id="cv-download-btn"
              >
                ↓ Download PDF
              </a>
            </div>
            <iframe
              src={cvUrl}
              className={styles.viewer}
              title="CV Preview"
            />
          </div>
        ) : (
          <div className={styles.empty}>
            <p>CV not uploaded yet. Check back soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
