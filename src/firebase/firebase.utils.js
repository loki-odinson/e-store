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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.log("error creating user", err.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

