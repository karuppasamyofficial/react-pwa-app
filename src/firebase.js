import firebase from 'firebase';
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBogEtsm5KDWirfK1GwX9P1-SFroSnfOgo",
    authDomain: "pwa-app-f4dda.firebaseapp.com",
    databaseURL: "https://pwa-app-f4dda.firebaseio.com",
    projectId: "pwa-app-f4dda",
    storageBucket: "pwa-app-f4dda.appspot.com",
    messagingSenderId: "503018458217",
    appId: "1:503018458217:web:723f75c2de6c0ff15aa6f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase