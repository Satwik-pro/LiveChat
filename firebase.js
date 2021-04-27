// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD3hPPJ1VkfKEy8xRRqp7oA3a2PVgNcuQ8",
    authDomain: "livechat-47501.firebaseapp.com",
    projectId: "livechat-47501",
    storageBucket: "livechat-47501.appspot.com",
    messagingSenderId: "692144988669",
    appId: "1:692144988669:web:96bf9a79226a572cffb994",
    measurementId: "G-T0JMQMQE4E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;