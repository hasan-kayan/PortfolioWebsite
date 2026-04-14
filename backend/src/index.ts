import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import bcrypt from 'bcryptjs';

import authRoutes from './routes/auth.routes';
import homeRoutes from './routes/home.routes';
import projectRoutes from './routes/project.routes';
import blogRoutes from './routes/blog.routes';
import contactRoutes from './routes/contact.routes';
import cvRoutes from './routes/cv.routes';
import Admin from './models/Admin.model';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/cv', cvRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

async function seedAdmin() {
  const existing = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
  if (!existing) {
    const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'changeme123', 12);
    await Admin.create({ email: process.env.ADMIN_EMAIL || 'admin@example.com', passwordHash: hash });
    console.log('✅ Admin user seeded');
  }
}

mongoose.connect(process.env.MONGODB_URI as string)
  .then(async () => {
    console.log('✅ MongoDB connected');
    await seedAdmin();
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

export default app;
