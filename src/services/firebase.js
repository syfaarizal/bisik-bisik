// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Profanity Filter
const badWords = [
  'anjing', 'babi', 'monyet', 'kunyuk', 'bajingan', 'asu', 'bangsat', 'kampret',
  'kontol', 'memek', 'jembut', 'peler', 'itil', 'ngentot', 'entot', 'seks',
  'pantek', 'pukimak', 'bodat', 'bego', 'goblok', 'tolol', 'idiot', 'setan', 'iblis',
  'fuck', 'shit', 'bitch', 'asshole', 'dick', 'pussy', 'whore', 'slut', 'bastard',
  'tai', 'tahi', 'jancok', 'jancuk', 'bgst', 'anj', 'ngentod', 'monyed', 'kntl', 'kntol'
];

export const filterProfanity = (text) => {
  if (!text) return "";
  let filteredText = text;
  
  badWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    filteredText = filteredText.replace(regex, (match) => '*'.repeat(match.length));
  });
  return filteredText;
};

// Helper: Format Time
export const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + "thn";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + "bln";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + "hr";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + "j";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + "m";
  return "baru saja";
};

// Firestore functions
export { 
  app, 
  auth, 
  db, 
  signInAnonymously, 
  onAuthStateChanged, 
  collection, 
  addDoc, 
  serverTimestamp, 
  onSnapshot 
};