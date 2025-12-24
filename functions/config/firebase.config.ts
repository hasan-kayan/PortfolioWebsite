import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let app: any;
let db: any;
let storageInstance: any;
let isInitialized = false;

export async function initializeFirebase() {
  if (isInitialized && db) {
    return;
  }
  
  if (getApps().length > 0) {
    app = getApps()[0];
    db = getFirestore(app);
    storageInstance = getStorage(app);
    isInitialized = true;
    return;
  }

  // Option 1: Use service account key from environment variable (JSON string)
  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    try {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
      app = initializeApp({
        credential: cert(serviceAccount),
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET || `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
      });
    } catch (error) {
      throw new Error('Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY. Make sure it\'s valid JSON.');
    }
  } 
  // Option 2: Use service account file path
  else if (process.env.FIREBASE_SERVICE_ACCOUNT_PATH) {
    try {
      const serviceAccountPath = path.resolve(process.env.FIREBASE_SERVICE_ACCOUNT_PATH);
      if (!fs.existsSync(serviceAccountPath)) {
        throw new Error(`Service account file not found at: ${serviceAccountPath}`);
      }
      const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
      app = initializeApp({
        credential: cert(serviceAccount),
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET || serviceAccount.project_id + '.appspot.com',
      });
    } catch (error: any) {
      throw new Error(`Failed to load service account from file: ${error.message}`);
    }
  }
  // Option 3: Use default credentials (for Google Cloud environments)
  else {
    try {
      app = initializeApp({
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET || `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
      });
    } catch (error: any) {
      throw new Error(`Failed to initialize Firebase with default credentials: ${error.message}`);
    }
  }

  db = getFirestore(app);
  storageInstance = getStorage(app);
  isInitialized = true;
}

// Get db instance (throws if not initialized)
export function getDb() {
  if (!db) {
    throw new Error('Firebase not initialized. Call initializeFirebase() first.');
  }
  return db;
}

// Get storage instance (throws if not initialized)
export function getStorageInstance() {
  if (!storageInstance) {
    throw new Error('Firebase not initialized. Call initializeFirebase() first.');
  }
  return storageInstance;
}

export { db, storageInstance as storage };
export default app;

