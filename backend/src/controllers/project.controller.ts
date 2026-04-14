import { Request, Response } from 'express';
import Project from '../models/Project.model';

export async function getProjects(req: Request, res: Response): Promise<void> {
  try {
    const { category, featured } = req.query;
    const filter: Record<string, unknown> = {};
    if (category) filter.category = category;
    if (featured === 'true') filter.featured = true;
    const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function getProject(req: Request, res: Response): Promise<void> {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) { res.status(404).json({ error: 'Not found' }); return; }
    res.json(project);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function createProject(req: Request, res: Response): Promise<void> {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function updateProject(req: Request, res: Response): Promise<void> {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) { res.status(404).json({ error: 'Not found' }); return; }
    res.json(project);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function deleteProject(req: Request, res: Response): Promise<void> {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}
