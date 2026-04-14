import type { Metadata } from 'next';
import { API_URL } from '@/lib/api';
import styles from './page.module.css';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Hasan Kayan — available for projects, collaborations, and opportunities.',
};

interface ContactData {
  email: string;
  phone: string;
  location: string;
  availability: string;
  socials: { github?: string; linkedin?: string; twitter?: string; };
}

async function getContact(): Promise<ContactData | null> {
  try {
    const res = await fetch(`${API_URL}/contact`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch { return null; }
}

export default async function ContactPage() {
  const contact = await getContact();

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Contact</span>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>
            Have a project, collaboration opportunity, or just want to say hi?
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.info}>
            {contact?.availability && (
              <div className={styles.availability}>
                <span className="status-dot"></span>
                <span>{contact.availability}</span>
              </div>
            )}

            <div className={styles.infoList}>
              {contact?.email && (
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Email</span>
                  <a href={`mailto:${contact.email}`} className={styles.infoValue}>{contact.email}</a>
                </div>
              )}
              {contact?.phone && (
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Phone</span>
                  <span className={styles.infoValue}>{contact.phone}</span>
                </div>
              )}
              {contact?.location && (
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>{contact.location}</span>
                </div>
              )}
            </div>

            {contact?.socials && (
              <div className={styles.socials}>
                {contact.socials.github && (
                  <a href={contact.socials.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" id="social-github">GitHub</a>
                )}
                {contact.socials.linkedin && (
                  <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" id="social-linkedin">LinkedIn</a>
                )}
                {contact.socials.twitter && (
                  <a href={contact.socials.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" id="social-twitter">Twitter</a>
                )}
              </div>
            )}
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
