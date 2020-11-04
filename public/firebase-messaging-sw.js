

importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');


firebase.initializeApp({
    messagingSenderId: "503018458217",
  })

const initMessaging = firebase.messaging();