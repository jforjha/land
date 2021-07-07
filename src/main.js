import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyD90cWJkgMsjc26RK2NmbDMvdzUovPm780",
//   authDomain: "auth-495b7.firebaseapp.com",
//   projectId: "auth-495b7",
//   storageBucket: "auth-495b7.appspot.com",
//   messagingSenderId: "838397777574",
//   appId: "1:838397777574:web:97f23bb497373f082a4667",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
