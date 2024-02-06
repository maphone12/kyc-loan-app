import firebase from '@react-native-firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4djrkIIfVrgDTMQLV7KD62OA-3wDmhb0",
  authDomain: "kyc-loan-app.firebaseapp.com",
  projectId: "kyc-loan-app",
  storageBucket: "kyc-loan-app.appspot.com",
  messagingSenderId: "501800503082",
  appId: "1:501800503082:web:4499c049f4d50f28348053",
  measurementId: "G-F3D1WJFQR7"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;