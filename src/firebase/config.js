import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxDBHr8XS73MGBkTFm1eBW0OfoGdOOk1M",
  authDomain: "fir-23ba6.firebaseapp.com",
  databaseURL: "https://fir-23ba6.firebaseio.com",
  projectId: "fir-23ba6",
  storageBucket: "fir-23ba6.appspot.com",
  messagingSenderId: "839277638406",
  appId: "1:839277638406:web:260735e886a6ed3b286487",
  measurementId: "G-DBE571NC4Z",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
