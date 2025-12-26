import { getDb } from '../config/firebase.config.js';
import { 
  CollectionReference, 
  DocumentData, 
  QuerySnapshot,
  Timestamp 
} from 'firebase-admin/firestore';

export class FirestoreService<T extends DocumentData> {
  private collection: CollectionReference<T>;

  constructor(collectionName: string) {
    const db = getDb();
    this.collection = db.collection(collectionName) as CollectionReference<T>;
  }

  async getAll(): Promise<T[]> {
    try {
      // Try with orderBy first, if it fails (no index), try without
      try {
        const snapshot = await this.collection.orderBy('createdAt', 'desc').get();
        return this.convertTimestamps(snapshot);
      } catch (orderByError: any) {
        // If orderBy fails (e.g., no index), try without ordering
        if (orderByError.code === 9 || orderByError.message?.includes('index')) {
          console.warn(`Index not found for createdAt, fetching without order:`, orderByError.message);
          const snapshot = await this.collection.get();
          return this.convertTimestamps(snapshot);
        }
        throw orderByError;
      }
    } catch (error: any) {
      console.error(`Error getting all documents from ${this.collection.id}:`, error);
      console.error(`Error code:`, error.code);
      console.error(`Error message:`, error.message);
      throw error;
    }
  }

  async getById(id: string): Promise<T | null> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        return null;
      }
      return { id: doc.id, ...doc.data() } as unknown as T;
    } catch (error) {
      console.error(`Error getting document ${id} from ${this.collection.id}:`, error);
      throw error;
    }
  }

  async getByField(field: string, value: any): Promise<T | null> {
    try {
      const snapshot = await this.collection.where(field, '==', value).limit(1).get();
      if (snapshot.empty) {
        return null;
      }
      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() } as T;
    } catch (error) {
      console.error(`Error getting document by ${field} from ${this.collection.id}:`, error);
      throw error;
    }
  }

  async create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T> {
    try {
      const docRef = this.collection.doc();
      const newData = {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as unknown as T;
      await docRef.set(newData);
      return { id: docRef.id, ...newData } as unknown as T;
    } catch (error) {
      console.error(`Error creating document in ${this.collection.id}:`, error);
      throw error;
    }
  }

  async createWithId(id: string, data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T> {
    try {
      // Check if document with this id already exists
      const existing = await this.collection.doc(id).get();
      if (existing.exists) {
        throw new Error(`Document with id ${id} already exists`);
      }

      const newData = {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as unknown as T;
      await this.collection.doc(id).set(newData);
      return { id, ...newData } as unknown as T;
    } catch (error) {
      console.error(`Error creating document with id ${id} in ${this.collection.id}:`, error);
      throw error;
    }
  }

  async update(id: string, data: Partial<Omit<T, 'id' | 'createdAt'>>): Promise<T> {
    try {
      const docRef = this.collection.doc(id);
      const doc = await docRef.get();
      
      if (!doc.exists) {
        throw new Error(`Document with id ${id} not found`);
      }

      const updateData = {
        ...data,
        updatedAt: new Date(),
      };
      
      await docRef.update(updateData);
      const updated = await docRef.get();
      return { id: doc.id, ...updated.data() } as unknown as T;
    } catch (error) {
      console.error(`Error updating document ${id} in ${this.collection.id}:`, error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.collection.doc(id).delete();
    } catch (error) {
      console.error(`Error deleting document ${id} from ${this.collection.id}:`, error);
      throw error;
    }
  }

  async deleteByField(field: string, value: any): Promise<void> {
    try {
      const snapshot = await this.collection.where(field, '==', value).get();
      const db = getDb();
      const batch = db.batch();
      snapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
      });
      await batch.commit();
    } catch (error) {
      console.error(`Error deleting documents by ${field} from ${this.collection.id}:`, error);
      throw error;
    }
  }

  private convertTimestamps(snapshot: QuerySnapshot<T>): T[] {
    return snapshot.docs.map(doc => {
      const data = doc.data();
      // Convert Firestore Timestamps to JavaScript Dates
      const converted: any = { id: doc.id, ...data };
      
      if (converted.createdAt && converted.createdAt.toDate) {
        converted.createdAt = converted.createdAt.toDate();
      }
      if (converted.updatedAt && converted.updatedAt.toDate) {
        converted.updatedAt = converted.updatedAt.toDate();
      }
      
      return converted as T;
    });
  }
}


