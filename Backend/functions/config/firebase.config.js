// Firebase Admin initialization for Firebase Functions
// In Functions, Firebase Admin is automatically initialized with default credentials

const admin = require('firebase-admin');

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

function getDb() {
  return db;
}

module.exports = { getDb, db };

