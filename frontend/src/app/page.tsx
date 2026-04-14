import type { Metadata } from 'next';
import styles from './page.module.css';
import { API_URL } from '@/lib/api';
import Link from 'next/link';

interface Stat { label: string; value: string; }
interface Skill { category: string; items: string[]; }
interface HomeData {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  stats: Stat[];
  aboutTitle: string;
  aboutText: string;
  skills: Skill[];
}

export const metadata: Metadata = {
  title: 'Hasan Kayan — Engineer & Developer',
  description: 'Full-stack developer and electronics engineer specializing in system design, embedded hardware, and production-grade software.',
};

async function getHomeData(): Promise<HomeData> {
  try {
    const res = await fetch(`${API_URL}/home`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed');
    return res.json();
  } catch {
    return {
      heroTitle: 'ENGINEER.\nDESIGNER.\nBUILDER.',
      heroSubtitle: 'Full Stack · Electronics · Systems',
      heroDescription: 'I design and build systems at the intersection of software and hardware — from PCB layout to production APIs.',
      stats: [
        { label: 'Projects Completed', value: '20+' },
        { label: 'Years of Experience', value: '5+' },
        { label: 'Technologies', value: '30+' },
      ],
      aboutTitle: 'About Me',
      aboutText: 'Electronics engineer specializing in full-stack systems, embedded hardware, and production-grade software. I bridge the gap between circuits and code.',
      skills: [
        { category: 'Software', items: ['Next.js', 'Node.js', 'TypeScript', 'Python', 'REST APIs', 'MongoDB'] },
        { category: 'Hardware & Embedded', items: ['STM32', 'Arduino', 'PCB Design', 'KiCad', 'FPGA', 'UART/SPI/I2C'] },
        { category: 'Systems & Tools', items: ['Docker', 'Linux', 'Git', 'CI/CD', 'AWS', 'Altium Designer'] },
      ],
    };
  }
}

export default async function HomePage() {
  const data = await getHomeData();
  const lines = data.heroTitle.split('\n');

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={`${styles.hero} grid-bg`} aria-label="Hero section">
        <div className={styles.heroInner}>
          <div className={styles.heroMeta}>
            <span className="section-label">Portfolio</span>
            <span className={styles.heroSubtitle}>{data.heroSubtitle}</span>
          </div>
          <h1 className={styles.heroTitle}>
            {lines.map((line, i) => (
              <span key={i} className={styles.heroLine} style={{ animationDelay: `${i * 0.15}s` }}>
                {line}
              </span>
            ))}
          </h1>
          <p className={styles.heroDesc}>{data.heroDescription}</p>
          <div className={styles.heroCta}>
            <Link href="/projects" className="btn btn-primary">View Projects</Link>
            <Link href="/contact" className="btn btn-outline">Get In Touch</Link>
          </div>
        </div>
        <div className={styles.heroDecor} aria-hidden="true">
          <div className={styles.heroGlobe}></div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats} aria-label="Statistics">
        <div className="container">
          <div className={styles.statsGrid}>
            {data.stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.about} aria-label="About section">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <span className="section-label">About</span>
              <h2 className={styles.aboutTitle}>{data.aboutTitle}</h2>
            </div>
            <div className={styles.aboutRight}>
              <p className={styles.aboutText}>{data.aboutText}</p>
              <Link href="/cv" className="btn btn-outline" style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}>
                Download CV →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={styles.skills} aria-label="Skills section">
        <div className="container">
          <div className={styles.skillsHeader}>
            <span className="section-label">Expertise</span>
            <h2 className={styles.skillsTitle}>What I Work With</h2>
          </div>
          <div className={styles.skillsGrid}>
            {data.skills.map((skill, i) => (
              <div key={i} className={`card ${styles.skillCard}`}>
                <h3 className={styles.skillCategory}>{skill.category}</h3>
                <div className={styles.skillItems}>
                  {skill.items.map((item, j) => (
                    <span key={j} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} aria-label="Call to action">
        <div className="container">
          <div className={styles.ctaInner}>
            <span className="section-label">Strategy</span>
            <h2 className={styles.ctaTitle}>HOW I APPROACH<br />EVERY PROJECT</h2>
            <p className={styles.ctaText}>
              Every project starts with understanding the problem deeply — then I design systems that are efficient, scalable, and maintainable across the full stack.
            </p>
            <Link href="/projects" className="btn btn-primary">See My Work</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
