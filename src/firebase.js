// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBd33PsbwagJWbgYroUH4S9U1B4_rZFuKI",
    authDomain: "facebook-db44c.firebaseapp.com",
    projectId: "facebook-db44c",
    storageBucket: "facebook-db44c.appspot.com",
    messagingSenderId: "292360174616",
    appId: "1:292360174616:web:1ca3190f72dd45ff1f576d",
    measurementId: "G-DWWGT656MN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;