// Google Cloud Storage configuration for Firebase Functions
// In Functions, we can use Firebase Admin Storage directly

const admin = require('firebase-admin');

function getBucket() {
  // Get the default storage bucket
  return admin.storage().bucket();
}

function initializeGCS() {
  // In Firebase Functions, Storage is automatically available
  // Just return a promise that resolves immediately
  return Promise.resolve();
}

module.exports = { getBucket, initializeGCS };

