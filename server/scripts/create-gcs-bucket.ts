import dotenv from 'dotenv';
import { Storage } from '@google-cloud/storage';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createGCSBucket() {
  try {
    const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID || process.env.FIREBASE_PROJECT_ID;
    const bucketName = process.env.GCS_BUCKET_NAME || process.env.FIREBASE_STORAGE_BUCKET;
    const location = process.env.GCS_BUCKET_LOCATION || 'us-central1';

    if (!projectId) {
      throw new Error('GOOGLE_CLOUD_PROJECT_ID or FIREBASE_PROJECT_ID must be set in .env');
    }

    if (!bucketName) {
      throw new Error('GCS_BUCKET_NAME or FIREBASE_STORAGE_BUCKET must be set in .env');
    }

    console.log('🔄 Initializing Google Cloud Storage...');

    let credentials: any = null;

    // Load credentials
    if (process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY || process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      const key = process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY || process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
      credentials = JSON.parse(key!);
    } else if (process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_PATH || process.env.FIREBASE_SERVICE_ACCOUNT_PATH) {
      const serviceAccountPath = path.resolve(
        process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_PATH || process.env.FIREBASE_SERVICE_ACCOUNT_PATH!
      );
      if (!fs.existsSync(serviceAccountPath)) {
        throw new Error(`Service account file not found at: ${serviceAccountPath}`);
      }
      credentials = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
    }

    const config: any = { projectId };
    if (credentials) {
      config.credentials = credentials;
    }

    const storage = new Storage(config);

    console.log(`\n📦 Checking bucket: ${bucketName}...`);
    
    const bucket = storage.bucket(bucketName);
    const [exists] = await bucket.exists();
    
    if (exists) {
      console.log(`✅ Bucket "${bucketName}" already exists!`);
      console.log(`\n🔗 Access it at: https://console.cloud.google.com/storage/browser/${bucketName}?project=${projectId}`);
      process.exit(0);
    }

    console.log(`\n🔄 Creating bucket "${bucketName}"...`);
    console.log(`   Project: ${projectId}`);
    console.log(`   Location: ${location}`);
    
    // Create bucket
    await storage.createBucket(bucketName, {
      location: location,
      storageClass: 'STANDARD',
    });
    
    console.log(`✅ Bucket "${bucketName}" created successfully!`);
    console.log(`\n🔗 Access it at: https://console.cloud.google.com/storage/browser/${bucketName}?project=${projectId}`);
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Configure bucket permissions if needed`);
    console.log(`   2. Upload files using the API`);
    
    process.exit(0);
  } catch (error: any) {
    console.error('\n❌ Error creating bucket:', error.message);
    
    if (error.code === 409 || error.message?.includes('already exists')) {
      console.log(`✅ Bucket already exists!`);
      process.exit(0);
    } else if (error.code === 403) {
      console.error('\n⚠️  Permission denied.');
      console.error('💡 Make sure your service account has "Storage Admin" role');
      console.error('   Or create bucket manually via Google Cloud Console:');
      console.error(`   https://console.cloud.google.com/storage/create-bucket?project=${process.env.GOOGLE_CLOUD_PROJECT_ID || process.env.FIREBASE_PROJECT_ID}`);
    } else {
      console.error('\n💡 Alternative: Create bucket manually via Google Cloud Console:');
      console.error(`   https://console.cloud.google.com/storage/create-bucket?project=${process.env.GOOGLE_CLOUD_PROJECT_ID || process.env.FIREBASE_PROJECT_ID}`);
    }
    
    process.exit(1);
  }
}

createGCSBucket();




