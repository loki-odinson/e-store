import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyClV08dbe7A_AoDU7agZtyixGYbZcbHOrY",
        authDomain: "e-store-db-4172c.firebaseapp.com",
        databaseURL: "https://e-store-db-4172c.firebaseio.com",
        projectId: "e-store-db-4172c",
        storageBucket: "e-store-db-4172c.appspot.com",
        messagingSenderId: "189573528143",
        appId: "1:189573528143:web:0a84aad42dc2c07d4fc83a",
        measurementId: "G-9EQJ1N2D9H"      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

