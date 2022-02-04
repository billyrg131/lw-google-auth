import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAS6QBmkQoTkaL7AkkNXgZb2YTnqI-7d_w",
    authDomain: "auth-8daa0.firebaseapp.com",
    projectId: "auth-8daa0",
    storageBucket: "auth-8daa0.appspot.com",
    messagingSenderId: "642812320272",
    appId: "1:642812320272:web:9d8d19acd74396f6970895",
    measurementId: "G-8NR6M9C25P"
}
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);