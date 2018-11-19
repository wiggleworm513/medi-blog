// src/firebase.js
import firebaseComponent from "firebase";
const config = {
  apiKey: "AIzaSyAWtvDkus1wi9XhBUf8rW37zWBdGvzi_UI",
  authDomain: "medi-blog.firebaseapp.com",
  databaseURL: "https://medi-blog.firebaseio.com",
  projectId: "medi-blog",
  storageBucket: "medi-blog.appspot.com",
  messagingSenderId: "488934635815"
};
firebaseComponent.initializeApp(config);
export default firebaseComponent;
