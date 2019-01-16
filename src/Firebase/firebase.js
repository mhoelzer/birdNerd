import firebase from "firebase/app";
import "firebase/storage";
// import admin from "firebase-admin";

// // import admin from "firebase/admin";
// const serviceAccount = require("./birdnerd-a8df0-firebase-adminsdk-cfhzg-54b0625f65.json");

// admin.initializeApp({
//   // serviceAccountId:
//   //   "firebase-adminsdk-cfhzg@birdnerd-a8df0.iam.gserviceaccount.com"
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: "birdnerd-a8df0.appspot.com"
//   // databaseURL: "https://birdnerd-a8df0.firebaseio.com"
// });

// const storage = admin.storage().ref("BirdNerd");

// // // Get the Auth service for the default app
// // const defaultAuth = admin.auth();

const config = {
  apiKey: "AIzaSyCAiZ5k1NohXSI9_6DDwJV5OntJzQSrb6g",
  authDomain: "birdnerd-a8df0.firebaseapp.com",
  databaseURL: "https://birdnerd-a8df0.firebaseio.com",
  projectId: "birdnerd-a8df0",
  storageBucket: "birdnerd-a8df0.appspot.com",
  messagingSenderId: "99796666360"
};
firebase.initializeApp(config);

const storage = firebase.storage().ref("BirdNerd");

export default storage;
