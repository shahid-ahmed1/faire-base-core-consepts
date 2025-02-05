import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpop8hYqGgQEiR4-RDAP7uatd-l5NymF0",
  authDomain: "faire-base-concepts.firebaseapp.com",
  projectId: "faire-base-concepts",
  storageBucket: "faire-base-concepts.firebasestorage.app",
  messagingSenderId: "492822792970",
  appId: "1:492822792970:web:1af3b7ff5d489f9a2d08f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)