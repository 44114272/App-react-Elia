import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyCHSyJpLR8F_fp_NIIWiPIo0pza6U2DA",
    authDomain: "eliabikes-833a0.firebaseapp.com",
    projectId: "eliabikes-833a0",
    storageBucket: "eliabikes-833a0.appspot.com",
    messagingSenderId: "913331947953",
    appId: "1:913331947953:web:12ae2ebc2d67c186e15590"
};

const app = firebase.initializeApp(firebaseConfig);

//agregar funciones

export const getFirestore = () =>{
    return firebase.firestore(app);
}