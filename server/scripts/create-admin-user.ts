import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { initializeFirebase } from '../src/config/firebase.config.js';
import { FirestoreService } from '../src/services/firestore.service.js';
import { User } from '../src/models/User.model.js';

dotenv.config();

async function createAdminUser() {
  try {
    await initializeFirebase();
    console.log('✅ Firebase initialized');

    const userService = new FirestoreService<User>('users');
    const username = process.argv[2] || 'admin';
    const password = process.argv[3] || 'admin123';

    // Check if user already exists
    const existingUser = await userService.getByField('username', username);
    if (existingUser) {
      console.log('❌ User already exists');
      process.exit(1);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await userService.create({
      username,
      password: hashedPassword,
    } as Omit<User, 'id' | 'createdAt' | 'updatedAt'>);

    console.log(`✅ Admin user created successfully!`);
    console.log(`   Username: ${username}`);
    console.log(`   Password: ${password}`);
    console.log(`   User ID: ${user.id}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
    process.exit(1);
  }
}

createAdminUser();
