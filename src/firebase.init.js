// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

apiKey:process.env.REACT_APP_APIKEY,
authDomain:process.env.REACT_APP_AUTHDOMAIN,
projectId:process.env.REACT_APP_PROJECTID,
storageBucket:process.env.REACT_APP_STORAGEBUCKET,
messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
appId:process.env.REACT_APP_APPID,
  // apiKey: "AIzaSyCgZ76RjcNTHzlAGJpyScHLBJuXzAmWmOs",
  // authDomain: "doctors-portal-8c064.firebaseapp.com",
  // projectId: "doctors-portal-8c064",
  // storageBucket: "doctors-portal-8c064.appspot.com",
  // messagingSenderId: "34339604438",
  // appId: "1:34339604438:web:c4f6611f0b17fc67010677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;