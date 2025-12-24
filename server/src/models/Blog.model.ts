// Firestore document interface for Blog
export interface Blog {
  id: string;
  title: string;
  content: string;
  tags?: string[];
  url?: string;
  images?: string[];
  videos?: string[]; // New: support for videos
  createdAt: Date;
  updatedAt: Date;
}
