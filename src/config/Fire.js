import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAm0OEQ7NMZCczpCA6SCU2XrLPKX81tLk8",
  authDomain: "expense-manager-c7dd6.firebaseapp.com",
  projectId: "expense-manager-c7dd6",
  storageBucket: "expense-manager-c7dd6.appspot.com",
  messagingSenderId: "609942258367",
  appId: "1:609942258367:web:acd6152420d0a34964fc0a",
  measurementId: "G-RXPR5EJGWZ"
};

const fire = firebase.initializeApp(config);
export default fire;