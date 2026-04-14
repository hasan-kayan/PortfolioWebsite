import { Request, Response } from 'express';
import HomeContent from '../models/HomeContent.model';

const defaultStats = [
  { label: 'Projects Completed', value: '20+' },
  { label: 'Years of Experience', value: '5+' },
  { label: 'Technologies', value: '30+' },
];

const defaultSkills = [
  { category: 'Software', items: ['Next.js', 'Node.js', 'TypeScript', 'Python', 'REST APIs', 'MongoDB'] },
  { category: 'Hardware & Embedded', items: ['STM32', 'Arduino', 'PCB Design', 'KiCad', 'FPGA', 'UART/SPI/I2C'] },
  { category: 'Systems & Tools', items: ['Docker', 'Linux', 'Git', 'CI/CD', 'AWS', 'Altium Designer'] },
];

export async function getHome(req: Request, res: Response): Promise<void> {
  try {
    let content = await HomeContent.findOne();
    if (!content) {
      content = await HomeContent.create({ stats: defaultStats, skills: defaultSkills });
    }
    res.json(content);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function updateHome(req: Request, res: Response): Promise<void> {
  try {
    const content = await HomeContent.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(content);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}
