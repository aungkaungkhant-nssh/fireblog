import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyA1Pj5pgpehG4qC43J8-dfRV4O8TI630wg",
    authDomain: "fireblog-6db7c.firebaseapp.com",
    projectId: "fireblog-6db7c",
    storageBucket: "fireblog-6db7c.appspot.com",
    messagingSenderId: "380985695661",
    appId: "1:380985695661:web:ce5135cc0495716e611524"
  };
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  export {db};