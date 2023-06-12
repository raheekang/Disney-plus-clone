// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXU-WxV2dzRn7agupWmZZeY1h6rL9vFDs",
  authDomain: "react-disney-plus-app-df337.firebaseapp.com",
  projectId: "react-disney-plus-app-df337",
  storageBucket: "react-disney-plus-app-df337.appspot.com",
  messagingSenderId: "724906458562",
  appId: "1:724906458562:web:8921013c8972b55406ea5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;