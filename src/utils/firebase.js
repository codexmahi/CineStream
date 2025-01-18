// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Add the authentication SDK

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXZ0QXD-6RhgixeWPwZBmyzkuh5a6SyUU",
  authDomain: "cinestream-ff2d8.firebaseapp.com",
  projectId: "cinestream-ff2d8",
  storageBucket: "cinestream-ff2d8.firebasestorage.app",
  messagingSenderId: "1008047084986",
  appId: "1:1008047084986:web:f22e004cee1285e5b13983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);  // Get Firebase Auth instance

// Export the auth instance so it can be used in other files
export { auth };
