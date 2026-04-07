// auth.js
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Redirect already logged-in admin to admin panel
onAuthStateChanged(auth, user => {
  if (user) {
    window.location.href = "admin.html";
  }
});

window.login = async function() {
  alert("My name is trilok")
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "admin.html";
  } catch (err) {
    alert(err.message);
  }
};
