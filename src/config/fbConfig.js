import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions'
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DB,
    projectId: process.env.REACT_APP_PID,
    storageBucket: process.env.REACT_APP_SB,
    messagingSenderId: process.env.REACT_APP_SID,
    appId: process.env.REACT_APP_APPID,
    measurementId:process.env.REACT_APP_MID
}

// Only initialize Firebase if the required config values are present
// This allows public pages (HomePage, LandingPage, PrivacyPolicy) to work
// even without a .env file
let storage = null;
let functions = null;
const isConfigured = firebaseConfig.apiKey && firebaseConfig.projectId;

if (isConfigured) {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore();
    storage = firebase.storage();
    functions = firebase.functions();
} else {
    console.warn(
        'Firebase config missing. Set REACT_APP_APIKEY, REACT_APP_PID etc in .env file. ' +
        'Public pages will work, but login/dashboard features will not be available.'
    );
}

// Export firebase namespace as default (same as before, needed by reduxFirestore)
// Also export firebaseConfig for conditional initialization in index.js
export {
    storage,
    functions,
    firebaseConfig,
    isConfigured,
    firebase as default
}
