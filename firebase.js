
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyByDApZyib7iC1yn0gakqskLYAz_xYmqcQ",
  authDomain: "soul-match-4acfc.firebaseapp.com",
  projectId: "soul-match-4acfc",
  storageBucket: "soul-match-4acfc.appspot.com",
  messagingSenderId: "18239620941",
  appId: "1:18239620941:web:54038772dfd6547f0ed904",
  measurementId: "G-Q3052LX6CY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => alert("Login feito com sucesso!"))
      .catch((error) => alert("Erro no login: " + error.message));
  });
}

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => alert("Conta criada com sucesso!"))
      .catch((error) => alert("Erro no cadastro: " + error.message));
  });
}
