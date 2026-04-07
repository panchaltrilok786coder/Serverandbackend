// app.js
import { db } from "./firebase.js";
import { collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ---------- HOME PAGE: SHOW BLOG LIST ----------
const blogList = document.getElementById("blogList");

if (blogList) {
  loadBlogs();
}

async function loadBlogs() {
  const snapshot = await getDocs(collection(db, "blogs"));

  snapshot.forEach(docSnap => {
    const blog = docSnap.data();

    const div = document.createElement("div");
    div.className = "blog-card";

    div.innerHTML = `
      <h3>${blog.title}</h3>
      <a href="blog.html?id=${docSnap.id}" class="btn">Read More</a>
    `;

    blogList.appendChild(div);
  });
}

// ---------- SINGLE BLOG PAGE ----------
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id) {
  loadSingleBlog(id);
}

async function loadSingleBlog(id) {
  const blogSnap = await getDoc(doc(db, "blogs", id));

  if (blogSnap.exists()) {
    const blog = blogSnap.data();
    document.getElementById("title").innerText = blog.title;
    document.getElementById("content").innerText = blog.content;
  } else {
    document.getElementById("title").innerText = "Blog Not Found";
    document.getElementById("content").innerText = "";
  }
}
