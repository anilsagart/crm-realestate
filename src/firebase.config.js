import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMCyAI3u8gDYiJnzWRr1hR8-a-twNwoDM",
    authDomain: "parichayatechsol.firebaseapp.com",
    projectId: "parichayatechsol",
    storageBucket: "parichayatechsol.firebasestorage.app",
    messagingSenderId: "101602859866",
    appId: "1:101602859866:web:c0c93136bdc958b8637163"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);