import mongoose, { Schema, Document } from 'mongoose';

export interface ISocials {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

export interface IContact extends Document {
  email: string;
  phone: string;
  location: string;
  socials: ISocials;
  availability: string;
}

const ContactSchema = new Schema<IContact>({
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  location: { type: String, default: '' },
  socials: {
    github: String,
    linkedin: String,
    twitter: String,
    instagram: String,
  },
  availability: { type: String, default: 'Open to opportunities' },
}, { timestamps: true });

export default mongoose.model<IContact>('Contact', ContactSchema);
