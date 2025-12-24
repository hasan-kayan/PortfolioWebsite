// Firestore document interface for Project
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  images?: string[];
  videos?: string[]; // New: support for videos
  createdAt: Date;
  updatedAt: Date;
}
