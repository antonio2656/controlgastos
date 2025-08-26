import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyCWmyepsFNF0J0MFK5bKXrtjEhs2bcQmJU",
    authDomain: "controlgastos-c1c42.firebaseapp.com",
    projectId: "controlgastos-c1c42",
    storageBucket: "controlgastos-c1c42.firebasestorage.app",
    messagingSenderId: "470613412974",
    appId: "1:470613412974:web:0ea024aaaca583df26aa7f",
    measurementId: "G-6VTZCQ6VEW"
  }
};

// ✅ Inicializas Firebase con environment.firebaseConfig
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
