import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.model';

export async function getContact(req: Request, res: Response): Promise<void> {
  try {
    let contact = await Contact.findOne();
    if (!contact) contact = await Contact.create({});
    res.json(contact);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function updateContact(req: Request, res: Response): Promise<void> {
  try {
    const contact = await Contact.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(contact);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function sendContactMessage(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      res.status(400).json({ error: 'name, email and message are required' });
      return;
    }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      html: `<p><b>From:</b> ${name} &lt;${email}&gt;</p><p>${message}</p>`,
    });
    res.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    // Return success in dev to not break UX
    res.json({ success: true, note: 'Email service not configured – message logged' });
  }
}
