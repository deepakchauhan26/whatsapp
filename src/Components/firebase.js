import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCFe_6PCQwDkpXVZxb-GGNfGpKI4z_c-0Y",
    authDomain: "whatsapp-2969b.firebaseapp.com",
    projectId: "whatsapp-2969b",
    storageBucket: "whatsapp-2969b.appspot.com",
    messagingSenderId: "393855146930",
    appId: "1:393855146930:web:ae11c7c4df0ea483c4e2ab",
    measurementId: "G-EDZM7P4B5R"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;