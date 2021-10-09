import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initilizeAuth = () => {
    initializeApp(firebaseConfig);
}

export default initilizeAuth;