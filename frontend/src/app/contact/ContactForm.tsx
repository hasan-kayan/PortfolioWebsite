'use client';
import { useState } from 'react';
import { API_URL } from '@/lib/api';
import styles from './page.module.css';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/contact/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch { setStatus('error'); }
  };

  return (
    <form onSubmit={submit} className={styles.form} noValidate>
      <div className={styles.formRow}>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" value={form.name} onChange={handle} required className="form-input" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" value={form.email} onChange={handle} required className="form-input" placeholder="your@email.com" />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" value={form.subject} onChange={handle} className="form-input" placeholder="What's this about?" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" value={form.message} onChange={handle} required className="form-input" rows={6} placeholder="Tell me about your project or question..." />
      </div>

      {status === 'success' && <p className={styles.success}>Message sent! I'll get back to you soon.</p>}
      {status === 'error' && <p className={styles.error}>Something went wrong. Please try again.</p>}

      <button type="submit" className="btn btn-primary" disabled={status === 'loading'} id="contact-submit-btn">
        {status === 'loading' ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  );
}
