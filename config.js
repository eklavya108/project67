import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyChR5asu5-TwbChU8zFc7AAPMGT2WIM7Pg",
    authDomain: "teamvotertest.firebaseapp.com",
    databaseURL: "https://teamvotertest-default-rtdb.firebaseio.com",
    projectId: "teamvotertest",
    storageBucket: "teamvotertest.appspot.com",
    messagingSenderId: "1055801216972",
    appId: "1:1055801216972:web:0bde52aaf3c8e78f7b1769"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();