// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import "firebase/auth";
import "firebase/database";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_PUBLIC_API_KEY,
    authDomain: process.env.REACT_APP_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PUBLIC_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_PUBLIC_APP_ID,
    measurementId: process.env.REACT_APP_PUBLIC_MEASUREMENT_ID,
    databaseURL: process.env.REACT_APP_PUBLIC_DATABASE_URL,
};

const firebase_app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

    const firebaseAuth =  getAuth(firebase_app);

export const fbFirestore = getFirestore(firebase_app);
export const fbRealtimeDB = getDatabase(firebase_app);

export default firebaseAuth;