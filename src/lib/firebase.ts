import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvcUMsr_B3tF0JdHoVdvplwNAi6T66pHA",
  authDomain: "digital-solutions-41e8d.firebaseapp.com",
  projectId: "digital-solutions-41e8d",
  storageBucket: "digital-solutions-41e8d.firebasestorage.app",
  messagingSenderId: "394359375440",
  appId: "1:394359375440:web:3810006c88b8e4a911b355",
  measurementId: "G-JCLLG3FPKE"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
