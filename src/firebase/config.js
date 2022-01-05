import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAzuPQ2NE4Ts7vIWiWr1-avrea5EPECMLQ",
    authDomain: "seekinfox-gallery.firebaseapp.com",
    projectId: "seekinfox-gallery",
    storageBucket: "seekinfox-gallery.appspot.com",
    messagingSenderId: "899127902261",
    appId: "1:899127902261:web:b3d4fbbcb2dc224232f17c"
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig); 

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
//create a timestap for the image
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp} 