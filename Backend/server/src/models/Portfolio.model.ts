// Firestore document interface for Portfolio
export interface Portfolio {
  id: string;
  filename: string;
  url: string; // Firebase Storage URL
  size: number;
  mimetype: string;
  createdAt: Date;
  updatedAt: Date;
}
