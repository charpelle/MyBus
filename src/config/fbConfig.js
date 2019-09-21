import firebase from 'firebase';

import config from './config';

var firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DATABASE_URL,
  projectId: config.PROJECT_ID,
  storageBucket: '',
  messagingSenderId: config.MESSAGE_SENDER_ID,
  appId: config.APP_ID
};
// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings({ timestampsInSnapshots: true })

export default Firebase;