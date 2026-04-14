import mongoose, { Schema, Document } from 'mongoose';

export interface IStat {
  label: string;
  value: string;
}

export interface ISkill {
  category: string;
  items: string[];
}

export interface IHomeContent extends Document {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  stats: IStat[];
  aboutTitle: string;
  aboutText: string;
  skills: ISkill[];
}

const HomeContentSchema = new Schema<IHomeContent>({
  heroTitle: { type: String, default: 'ENGINEER.\nDESIGNER.\nBUILDER.' },
  heroSubtitle: { type: String, default: 'Full Stack · Electronics · Systems' },
  heroDescription: { type: String, default: 'I design and build systems at the intersection of software and hardware.' },
  stats: [{ label: String, value: String }],
  aboutTitle: { type: String, default: 'About Me' },
  aboutText: { type: String, default: 'Electronics engineer specializing in full-stack systems, embedded hardware, and production-grade software.' },
  skills: [{ category: String, items: [String] }],
}, { timestamps: true });

export default mongoose.model<IHomeContent>('HomeContent', HomeContentSchema);
