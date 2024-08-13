// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from "firebase/Database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKo9QEVjcLHyUtp5Jt5Vq7f5ea9hyPZKg",
  authDomain: "projectegg-55230.firebaseapp.com",
  databaseURL: "https://projectegg-55230-default-rtdb.firebaseio.com",
  projectId: "projectegg-55230",
  storageBucket: "projectegg-55230.appspot.com",
  messagingSenderId: "132251004958",
  appId: "1:132251004958:web:74bfd9a4643790a335fe0f",
  measurementId: "G-PNE98CLNZH"
};

const app = initializeApp(firebaseConfig);

function writeUserData(email, fname, lname, user, ) {
    const database = getDatabase();
    const refrence =ref(database, "database/" + email);

    set(refrence, {
        first_name: fname,
        last_name: lname,
        username: user,
        email: email,
    });
}

writeUserData("TestF", "TestL", "TestU", "TestE");