import firebase from "firebase/compat/app";
// import { inisiasiApp } from 'firebase/app'
import "firebase/compat/database";
import 'firebase/compat/firestore';
// import 'firebase/compat/auth';


const settings = { timestampsInSnapshots: true };
const app = firebase.initializeApp({
    // apiKey: "AIzaSyDhvfOBmJc8kLcP8lCtc26WCrcD8aRtFxs",
    // authDomain: "my-project-dc5b5.firebaseapp.com",
    // projectId: "my-project-dc5b5",
    // storageBucket: "my-project-dc5b5.appspot.com",
    // messagingSenderId: "214140546132",
    // appId: "1:214140546132:web:82c0cc9ef0d00036d091c1",
    // measurementId: "G-NHCWLK297M"
    apiKey: "AIzaSyA5k3ZTjqWAnu3aUppDhV_W7KuN3x0j8c8",
    authDomain: "simple-project-3e3c0.firebaseapp.com",
    databaseURL: "https://simple-project-3e3c0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "simple-project-3e3c0",
    storageBucket: "simple-project-3e3c0.appspot.com",
    messagingSenderId: "1044749817325",
    appId: "1:1044749817325:web:cbb55805180892a60a43e4",
    measurementId: "G-E7JQX9CRYP"
});

// const app = firebase.initializeApp(config);
// // const app = inisiasiApp(config);
// const auth = getAuth(app)

// export const auth = app.auth();
// export default app
// export const databaseService = firebase.database();

firebase.firestore().settings(settings);
export default app;