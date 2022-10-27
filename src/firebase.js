import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDQx-Tgnll0ZisbNH-rpCHgr0f9xASMFD4",
    authDomain: "netflix-e9b93.firebaseapp.com",
    projectId: "netflix-e9b93",
    storageBucket: "netflix-e9b93.appspot.com",
    messagingSenderId: "178135120214",
    appId: "1:178135120214:web:23561fc7f3d23c0fd27ef7"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

