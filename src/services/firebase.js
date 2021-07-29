import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDbBSJhyZWjk4AcYdrFKX9_BP6e8xVhlF8',
  authDomain: 'single-page-app-react-redux.firebaseapp.com',
  databaseURL:
    'https://single-page-app-react-redux-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'single-page-app-react-redux',
  storageBucket: 'single-page-app-react-redux.appspot.com',
  messagingSenderId: '155436950994',
  appId: '1:155436950994:web:064ce10e8eb24abf69d40b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
