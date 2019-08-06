import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD2TaM8FFsbjbhCQpJ6o1FXnNxfw3rT6Wk",
  authDomain: "net-petalplan.firebaseapp.com",
  databaseURL: "https://net-petalplan.firebaseio.com",
  projectId: "net-petalplan",
  storageBucket: "",
  messagingSenderId: "600977851896",
  appId: "1:600977851896:web:b366549ccdc6bb39"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
