import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'hardware' | 'software' | 'system' | 'other';
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  order: number;
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String, default: '' },
  tags: [String],
  category: { type: String, enum: ['hardware', 'software', 'system', 'other'], default: 'other' },
  imageUrl: { type: String, default: '' },
  githubUrl: { type: String, default: '' },
  liveUrl: { type: String, default: '' },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model<IProject>('Project', ProjectSchema);
