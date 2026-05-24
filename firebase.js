// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "ai-smart-recipe-system.firebaseapp.com",
  databaseURL: "https://ai-smart-recipe-system-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ai-smart-recipe-system",
  storageBucket: "ai-smart-recipe-system.firebasestorage.app",
  messagingSenderId: "731776305873",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database Reference
const database = firebase.database();
