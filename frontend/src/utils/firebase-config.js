import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDODWhJitN_JifPLhYtmFs8WdzS41sATM4",
  authDomain: "unsplash-dc53c.firebaseapp.com",
  projectId: "unsplash-dc53c",
  storageBucket: "unsplash-dc53c.appspot.com",
  messagingSenderId: "890744914828",
  appId: "1:890744914828:web:ca73d7d3a058db97704ca9",
  measurementId: "G-QE6LJF6PSW",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}
