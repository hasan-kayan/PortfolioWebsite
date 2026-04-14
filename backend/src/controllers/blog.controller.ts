import { Request, Response } from 'express';
import BlogPost from '../models/BlogPost.model';

export async function getPosts(req: Request, res: Response): Promise<void> {
  try {
    const { published } = req.query;
    const filter: Record<string, unknown> = {};
    if (published !== 'all') filter.published = true;
    const posts = await BlogPost.find(filter).sort({ publishedAt: -1 }).select('-content');
    res.json(posts);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function getPostBySlug(req: Request, res: Response): Promise<void> {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug, published: true });
    if (!post) { res.status(404).json({ error: 'Not found' }); return; }
    res.json(post);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function getPostById(req: Request, res: Response): Promise<void> {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) { res.status(404).json({ error: 'Not found' }); return; }
    res.json(post);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function createPost(req: Request, res: Response): Promise<void> {
  try {
    const post = await BlogPost.create(req.body);
    res.status(201).json(post);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Server error';
    res.status(500).json({ error: msg });
  }
}

export async function updatePost(req: Request, res: Response): Promise<void> {
  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) { res.status(404).json({ error: 'Not found' }); return; }
    res.json(post);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function deletePost(req: Request, res: Response): Promise<void> {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
}
