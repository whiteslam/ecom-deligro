import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDKBhJphFO5OGddts7UPj29Ax42TdzJtBY",
  authDomain: "deligro-delivery.firebaseapp.com",
  projectId: "deligro-delivery",
  storageBucket: "deligro-delivery.firebasestorage.app",
  messagingSenderId: "446038328082",
  appId: "1:446038328082:web:a64b89f7508b72afaca9cb",
  measurementId: "G-QH34SKL3YW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, analytics };
