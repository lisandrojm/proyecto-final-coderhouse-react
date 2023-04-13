import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCj0tYMtnzkLotuXJKiKJpdo2ICSpuEpAo',
  authDomain: 'freelo-ecom.firebaseapp.com',
  projectId: 'freelo-ecom',
  storageBucket: 'freelo-ecom.appspot.com',
  messagingSenderId: '473945389852',
  appId: '1:473945389852:web:0229fa887b2bc7ec1e58d9',
  measurementId: 'G-HH72C6BZCK',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
