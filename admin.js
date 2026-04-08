// admin.js
import { db, auth } from "./firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Redirect if not logged in
onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// ADD BLOG
window.addBlog = async function() {
  const title = document.getElementById("titleInput").value;
  const content = document.getElementById("contentInput").value;

  if (!title || !content) return alert("Fill all fields");

  await addDoc(collection(db, "blogs"), { title, content });
  alert("Blog added!");
  loadBlogs();
};

// LOAD ALL BLOGS
async function loadBlogs() {
  const snapshot = await getDocs(collection(db, "blogs"));
  const container = document.getElementById("adminBlogs");
  container.innerHTML = "";

  snapshot.forEach(docSnap => {
    const blog = docSnap.data();
    const div = document.createElement("div");
    div.className = "blog-card"; // consistent styling

    div.innerHTML = `
      <h3>${blog.title}</h3>
      <div>
        <button class="btn" onclick="deleteBlog('${docSnap.id}')">Delete</button>
      </div>
    `;

    container.appendChild(div);
  });
}

// DELETE BLOG
window.deleteBlog = async function(id) {
  await deleteDoc(doc(db, "blogs", id));
  loadBlogs();
};

// LOGOUT
window.logout = async function() {
  await signOut(auth);
  window.location.href = "login.html";
};
loadBlogs();
const blogaddbtn = document.getElementbyId("addbtn");
blogaddbtn.addEventListener("click", addBlog);
