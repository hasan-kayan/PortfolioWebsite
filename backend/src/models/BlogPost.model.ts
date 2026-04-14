import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogPost extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage: string;
  published: boolean;
  publishedAt: Date;
}

const BlogPostSchema = new Schema<IBlogPost>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, default: '' },
  content: { type: String, default: '' },
  tags: [String],
  coverImage: { type: String, default: '' },
  published: { type: Boolean, default: false },
  publishedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);
