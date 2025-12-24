// Firestore document interface for User
export interface User {
  id: string;
  username: string;
  password: string; // Hashed
  createdAt: Date;
  updatedAt: Date;
}
