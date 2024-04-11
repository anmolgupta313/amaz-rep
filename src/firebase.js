// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTcVqjmMWmtYtJz5YgxdYikwSaJxljS5c",
  authDomain: "clone-e29c6.firebaseapp.com",
  projectId: "clone-e29c6",
  storageBucket: "clone-e29c6.appspot.com",
  messagingSenderId: "733108251702",
  appId: "1:733108251702:web:2872410d8753e1781f3c97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)

export{app,auth}