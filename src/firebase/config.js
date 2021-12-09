import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBDlTw8Zh6I7tHpJA6VINReOvSRZHviKUI",
    authDomain: "cooking-ninja-site-bc310.firebaseapp.com",
    projectId: "cooking-ninja-site-bc310",
    storageBucket: "cooking-ninja-site-bc310.appspot.com",
    messagingSenderId: "1015309333828",
    appId: "1:1015309333828:web:769721f1f6b2594a2e9311"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }