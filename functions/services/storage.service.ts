import { Storage, Bucket, File } from '@google-cloud/storage';
import { getGCSInstance, getBucketName } from '../config/gcs.config.js';

/**
 * Google Cloud Storage Service
 * Direct integration with Google Cloud Storage (not Firebase Storage)
 */
export class StorageService {
  private storage: Storage;
  private bucket: Bucket;
  private bucketName: string;

  constructor() {
    this.storage = getGCSInstance();
    this.bucketName = getBucketName();
    
    if (!this.bucketName) {
      throw new Error('GCS_BUCKET_NAME or FIREBASE_STORAGE_BUCKET must be set in .env');
    }

    this.bucket = this.storage.bucket(this.bucketName);
  }

  /**
   * Get bucket instance (for direct file access)
   */
  getBucket(): Bucket {
    return this.bucket;
  }

  /**
   * Check if bucket exists
   */
  async checkBucketExists(): Promise<boolean> {
    try {
      const [exists] = await this.bucket.exists();
      return exists;
    } catch (error) {
      console.error('Error checking bucket existence:', error);
      return false;
    }
  }

  /**
   * Upload a file to Google Cloud Storage
   * @param file Buffer or file path
   * @param destinationPath Path in storage (e.g., 'portfolio/cv/portfolio.pdf')
   * @param contentType MIME type (e.g., 'image/jpeg', 'application/pdf')
   */
  async uploadFile(
    file: Buffer | string,
    destinationPath: string,
    contentType?: string
  ): Promise<string> {
    try {
      // Check if bucket exists
      const bucketExists = await this.checkBucketExists();
      if (!bucketExists) {
        throw new Error(
          `Google Cloud Storage bucket "${this.bucketName}" does not exist. ` +
          `Please create it in Google Cloud Console: ` +
          `https://console.cloud.google.com/storage/create-bucket?project=${process.env.GOOGLE_CLOUD_PROJECT_ID || process.env.FIREBASE_PROJECT_ID}`
        );
      }

      const fileRef = this.bucket.file(destinationPath);
      
      const options: any = {
        metadata: {
          contentType: contentType || 'application/octet-stream',
        },
        resumable: false, // For small files, use resumable: false for faster uploads
      };

      if (typeof file === 'string') {
        // If file is a path, upload from filesystem
        await this.bucket.upload(file, {
          destination: destinationPath,
          metadata: options.metadata,
        });
      } else {
        // If file is a Buffer, upload directly
        const stream = fileRef.createWriteStream({
          metadata: {
            contentType: options.metadata.contentType,
          },
        });

        return new Promise((resolve, reject) => {
          stream.on('error', (error) => {
            reject(error);
          });

          stream.on('finish', async () => {
            try {
              // Make file publicly accessible
              await fileRef.makePublic();
              
              // Get public URL
              const url = `https://storage.googleapis.com/${this.bucketName}/${destinationPath}`;
              resolve(url);
            } catch (error) {
              reject(error);
            }
          });

          stream.end(file);
        });
      }

      // Make file publicly accessible
      await fileRef.makePublic();

      // Get public URL
      const url = `https://storage.googleapis.com/${this.bucketName}/${destinationPath}`;
      return url;
    } catch (error: any) {
      console.error('Error uploading file to Google Cloud Storage:', error);
      
      // Provide more helpful error messages
      if (error.message && error.message.includes('does not exist')) {
        throw error; // Re-throw our custom error
      } else if (error.code === 404 || error.message?.includes('not found')) {
        throw new Error(
          `Google Cloud Storage bucket "${this.bucketName}" not found. ` +
          `Please ensure the bucket exists in Google Cloud Console. ` +
          `Go to: https://console.cloud.google.com/storage/browser?project=${process.env.GOOGLE_CLOUD_PROJECT_ID || process.env.FIREBASE_PROJECT_ID}`
        );
      }
      
      throw error;
    }
  }

  /**
   * Upload a file from multer
   */
  async uploadMulterFile(
    file: Express.Multer.File,
    destinationPath: string
  ): Promise<string> {
    return this.uploadFile(file.buffer, destinationPath, file.mimetype);
  }

  /**
   * Get download URL for a file (public URL)
   */
  async getDownloadURL(filePath: string): Promise<string> {
    try {
      const url = `https://storage.googleapis.com/${this.bucketName}/${filePath}`;
      return url;
    } catch (error) {
      console.error('Error getting download URL:', error);
      throw error;
    }
  }

  /**
   * Delete a file from storage
   */
  async deleteFile(filePath: string): Promise<void> {
    try {
      const fileRef = this.bucket.file(filePath);
      await fileRef.delete();
    } catch (error) {
      console.error('Error deleting file from Google Cloud Storage:', error);
      throw error;
    }
  }

  /**
   * Delete file by URL (extracts path from URL)
   */
  async deleteFileByURL(url: string): Promise<void> {
    try {
      // Extract path from URL
      // URL format: https://storage.googleapis.com/bucket-name/path/to/file
      const urlParts = url.split('/');
      const bucketIndex = urlParts.findIndex(part => part.includes('googleapis.com'));
      if (bucketIndex === -1) {
        throw new Error('Invalid Google Cloud Storage URL');
      }
      // Skip googleapis.com and bucket name, get only the file path
      // urlParts structure: ['https:', '', 'storage.googleapis.com', 'bucket-name', 'path', 'to', 'file']
      const path = urlParts.slice(bucketIndex + 2).join('/'); // +2 to skip googleapis.com and bucket name
      await this.deleteFile(path);
    } catch (error) {
      console.error('Error deleting file by URL:', error);
      throw error;
    }
  }

  /**
   * Check if file exists
   */
  async fileExists(filePath: string): Promise<boolean> {
    try {
      const fileRef = this.bucket.file(filePath);
      const [exists] = await fileRef.exists();
      return exists;
    } catch (error) {
      console.error('Error checking file existence:', error);
      return false;
    }
  }

  /**
   * Get file metadata
   */
  async getFileMetadata(filePath: string): Promise<any> {
    try {
      const fileRef = this.bucket.file(filePath);
      const [metadata] = await fileRef.getMetadata();
      return metadata;
    } catch (error) {
      console.error('Error getting file metadata:', error);
      throw error;
    }
  }
}
