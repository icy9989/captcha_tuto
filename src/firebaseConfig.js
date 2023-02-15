import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBKP3cuyrFHm0aEvdz-a6XmMwB_bror6Oo",
  authDomain: "captcha-tuto.firebaseapp.com",
  projectId: "captcha-tuto",
  storageBucket: "captcha-tuto.appspot.com",
  messagingSenderId: "381759093748",
  appId: "1:381759093748:web:9de8f538323744bf4b97a1",
  measurementId: "G-WKTR02Z972"
};

export const app = initializeApp(firebaseConfig);