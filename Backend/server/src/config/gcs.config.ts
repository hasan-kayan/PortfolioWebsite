import { Storage } from '@google-cloud/storage';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let storageInstance: Storage | null = null;
let isInitialized = false;

/**
 * Initialize Google Cloud Storage
 * Uses service account key from environment or file
 */
export async function initializeGCS(): Promise<Storage> {
  if (isInitialized && storageInstance) {
    return storageInstance;
  }

  const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID || process.env.FIREBASE_PROJECT_ID;
  const bucketName = process.env.GCS_BUCKET_NAME || process.env.FIREBASE_STORAGE_BUCKET;

  if (!projectId) {
    throw new Error('GOOGLE_CLOUD_PROJECT_ID or FIREBASE_PROJECT_ID must be set in .env');
  }

  if (!bucketName) {
    throw new Error('GCS_BUCKET_NAME or FIREBASE_STORAGE_BUCKET must be set in .env');
  }

  let credentials: any = null;

  // Option 1: Use service account key from environment variable (JSON string)
  if (process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY || process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    try {
      const key = process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY || process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
      credentials = JSON.parse(key!);
    } catch (error) {
      throw new Error('Failed to parse GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY. Make sure it\'s valid JSON.');
    }
  }
  // Option 2: Use service account file path
  else if (process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_PATH || process.env.FIREBASE_SERVICE_ACCOUNT_PATH) {
    try {
      const serviceAccountPath = path.resolve(
        process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_PATH || process.env.FIREBASE_SERVICE_ACCOUNT_PATH!
      );
      if (!fs.existsSync(serviceAccountPath)) {
        throw new Error(`Service account file not found at: ${serviceAccountPath}`);
      }
      credentials = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
    } catch (error: any) {
      throw new Error(`Failed to load service account from file: ${error.message}`);
    }
  }
  // Option 3: Use default credentials (for Google Cloud environments)
  else {
    // Will use Application Default Credentials (ADC)
    // gcloud auth application-default login
  }

  // Initialize Google Cloud Storage
  const config: any = {
    projectId,
  };

  if (credentials) {
    config.keyFilename = undefined;
    config.credentials = credentials;
  }

  storageInstance = new Storage(config);
  isInitialized = true;

  console.log(`✅ Google Cloud Storage initialized`);
  console.log(`   Project: ${projectId}`);
  console.log(`   Bucket: ${bucketName}`);

  return storageInstance;
}

/**
 * Get Google Cloud Storage instance
 */
export function getGCSInstance(): Storage {
  if (!storageInstance) {
    throw new Error('Google Cloud Storage not initialized. Call initializeGCS() first.');
  }
  return storageInstance;
}

/**
 * Get bucket name from environment
 */
export function getBucketName(): string {
  return process.env.GCS_BUCKET_NAME || process.env.FIREBASE_STORAGE_BUCKET || '';
}

export default storageInstance;




