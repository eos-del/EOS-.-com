// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBXeNMJe6wMEb2u5KfDwOURenwF8f7Nlvg",
  authDomain: "eos-platform-of-gods.firebaseapp.com",
  projectId: "eos-platform-of-gods",
  storageBucket: "eos-platform-of-gods.firebasestorage.app",
  messagingSenderId: "313477636204",
  appId: "1:313477636204:web:4c869dd4e207dc01a03849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Make functions available to index.html
window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.signOut = signOut;
window.onAuthStateChanged = onAuthStateChanged;
