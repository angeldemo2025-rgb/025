importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBpWDSAOYjkaJCSjpkzcIy2PuPKCLvwGWE",
  messagingSenderId: "737450804732",
  appId: "1:737450804732:web:1e9ae74a1d9e8ecd2c1e79"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body
  });
});
