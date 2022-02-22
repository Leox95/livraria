import firebase from "firebase/compat/app";
import "firebase/compat/auth";  
import "firebase/compat/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyBAnIvufe62ueSTSrmulkorQ8_yjohtRuo",
  authDomain: "estudosfire-9e857.firebaseapp.com",
  projectId: "estudosfire-9e857",
  storageBucket: "estudosfire-9e857.appspot.com",
  messagingSenderId: "33640251170",
  appId: "1:33640251170:web:4fd4c24c98035515e6ef7b",
  measurementId: "G-HYHGMCPWPH"
};
  
  // Initialize Firebase
 
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
 
  export default firebase;