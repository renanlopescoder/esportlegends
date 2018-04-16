// import * as firebase from 'firebase'
import firebase from 'react-native-firebase'
import * as c from "./constants"

// Initialize Firebase
const config = {
    apiKey: c.FIREBASE_API_KEY,
    authDomain: c.FIREBASE_AUTH_DOMAIN,
    databaseURL: c.FIREBASE_DATABASE_URL,
    projectId: c.FIREBASE_PROJECT_ID,
    storageBucket: c.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: c.FIREBASE_MESSAGING_SENDER_ID,
}

firebase.initializeApp(config)

export default firebase
