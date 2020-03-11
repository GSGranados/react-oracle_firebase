import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

var firebaseConfig = {
    apiKey: "AIzaSyAwcYPJr9NksDhvR2QtmRAhsndMZ9wv8ZA",
    authDomain: "issue-database.firebaseapp.com",
    databaseURL: "https://issue-database.firebaseio.com",
    projectId: "issue-database",
    storageBucket: "issue-database.appspot.com",
    messagingSenderId: "750152781856",
    appId: "1:750152781856:web:b5af3cd2da4ce60d16ec45"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings(settings);

  export default firebase;