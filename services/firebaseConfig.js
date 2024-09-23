// services/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCp1SCMDziHTBfQ4o0c8WktCHiMGSaLDZA",
  authDomain: "todoapp-37c3a.firebaseapp.com",
  projectId: "todoapp-37c3a",
  storageBucket: "todoapp-37c3a.appspot.com",
  messagingSenderId: "136198658502",
  appId: "1:136198658502:android:c51fd20fc5dadaae11bac7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);