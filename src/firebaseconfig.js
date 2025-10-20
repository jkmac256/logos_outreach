// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_MgIF1D4hG40vkcMZ5F_o3NMe8335cxM",
  authDomain: "logos-outreach.firebaseapp.com",
  projectId: "logos-outreach",
  storageBucket: "logos-outreach.firebasestorage.app",
  messagingSenderId: "1041215387159",
  appId: "1:1041215387159:web:ac7877bae4588960d14e52",
  measurementId: "G-V8DL19QFJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);