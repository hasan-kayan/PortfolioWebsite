import mongoose, { Schema, Document } from 'mongoose';

export interface ICV extends Document {
  filename: string;
  originalName: string;
  uploadedAt: Date;
  downloadCount: number;
}

const CVSchema = new Schema<ICV>({
  filename: { type: String, required: true },
  originalName: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
  downloadCount: { type: Number, default: 0 },
});

export default mongoose.model<ICV>('CV', CVSchema);
