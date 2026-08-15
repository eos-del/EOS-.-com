import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBXeNMJe6wMEb2u5KfDwOURenwF8f7Nlvg",
    authDomain: "eos-platform-of-gods.firebaseapp.com",
    projectId: "eos-platform-of-gods",
    storageBucket: "eos-platform-of-gods.firebasestorage.app",
    messagingSenderId: "313477636204",
    appId: "1:313477636204:web:4c869dd4e207dc01a03849"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {

    const currentPath = window.location.pathname;

    if (!user) {
        const isMainEOSPage =
            currentPath.endsWith("/EOS-.-com/") ||
            currentPath.endsWith("/EOS-.-com/index.html");

        if (isMainEOSPage) {
            window.location.href = "./accounts/index.html";
        }

        return;
    }

    if (!user.emailVerified) {
        alert("Please verify your EOS email before entering EOS Studio.");

        auth.signOut().finally(() => {
            window.location.href = "./accounts/index.html";
        });

        return;
    }

    console.log("EOS user authenticated:", user.email);
});
