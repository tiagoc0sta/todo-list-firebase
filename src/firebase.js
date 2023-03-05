// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAl34XCFkBqvAkp0nCKYpMzzTXRLC3DaJQ',
  authDomain: 'todo-app-yt-741e9.firebaseapp.com',
  projectId: 'todo-app-yt-741e9',
  storageBucket: 'todo-app-yt-741e9.appspot.com',
  messagingSenderId: '986886647106',
  appId: '1:986886647106:web:f7c8c4a488de7a6da32cdb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
