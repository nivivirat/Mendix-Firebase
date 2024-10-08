importScripts(
  "https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDB-1MiJrmHhHx-s_xB6cX65i3CrT_BoFk",
  authDomain: "recipehub360.firebaseapp.com",
  projectId: "recipehub360",
  storageBucket: "recipehub360.appspot.com",
  messagingSenderId: "987632445081",
  appId: "1:987632445081:web:1c0d882bd5e8eefaca3a08",
  measurementId: "G-0GW302Y7HY",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
