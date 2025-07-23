 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
 import { getStorage } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDfeKdPxAmYViVhdbaq1Tb6OCBIBnCLTWw",
   authDomain: "damaris-proyect.firebaseapp.com",
   projectId: "damaris-proyect",
   storageBucket: "damaris-proyect.appspot.com",
   messagingSenderId: "801708859677",
   appId: "1:801708859677:web:d7603186f7df7ef35981f4",
   measurementId: "G-C7Q9ZENS10"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const storage = getStorage(app);

 export { db, storage };