// Firebase Configuration provided by user
// In production, these should ideally be environment variables, but defaults are provided for immediate usage.
// The safe check (import.meta.env && ...) prevents runtime crashes if the env object is undefined in some contexts.

export const FIREBASE_CONFIG = {
  apiKey: (import.meta.env && import.meta.env.VITE_FIREBASE_API_KEY) || "AIzaSyC5hFB3ICxzyMrlvtnQl-n-2Dkr2RFsmqc",
  authDomain: (import.meta.env && import.meta.env.VITE_FIREBASE_AUTH_DOMAIN) || "fir-9b1f8.firebaseapp.com",
  projectId: (import.meta.env && import.meta.env.VITE_FIREBASE_PROJECT_ID) || "fir-9b1f8",
  storageBucket: (import.meta.env && import.meta.env.VITE_FIREBASE_STORAGE_BUCKET) || "fir-9b1f8.firebasestorage.app",
  messagingSenderId: (import.meta.env && import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID) || "539772525700",
  appId: (import.meta.env && import.meta.env.VITE_FIREBASE_APP_ID) || "1:539772525700:web:25b5a686877ddbf6d176d1",
  measurementId: (import.meta.env && import.meta.env.VITE_FIREBASE_MEASUREMENT_ID) || "G-7FWY3QB5MY"
};

export const CREATOR_INFO = {
  name: "Akin S. Sokpah",
  location: "Liberia",
  role: "Lead Engineer & Founder"
};

// To add your actual signature image:
// 1. Convert your signature image to a Base64 string (online tools like 'base64-image.de').
// 2. Paste the string inside the quotes below. 
// Example: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
export const SIGNATURE_IMAGE_URL = ""; 

export const DONATION_INFO = {
  momo: "+231889183557",
  uba: "53020710015394",
  recommendedUSD: "$25.00"
};

export const COMMUNITY_LINKS = {
  whatsapp: "https://chat.whatsapp.com/FHdR9NQHGwhCAoWC0tIGKV?mode=hqrt2",
  messenger: "https://m.me/j/AbZakXqlPl-V78Mv/",
  channel: "https://whatsapp.com/channel/0029VbB95wHFCCoRa2rLSm1V",
  facebook: "https://www.facebook.com/profile.php?id=61584881776095"
};

export const GEMINI_MODEL = 'gemini-2.5-flash';

export const UNIVERSITY_LINKS = {
  UL: "https://ul.edu.lr/",
  CUTTINGTON: "https://www.cuttington.edu.lr/",
  TUBMAN: "https://www.tubman.edu.lr/",
  AMEU: "https://ame.edu.lr/"
};