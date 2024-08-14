// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from "firebase/Database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


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