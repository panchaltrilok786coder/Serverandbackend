// app.js
import { db } from "./firebase.js";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

// ---------- HOME PAGE: SHOW BLOG LIST ----------
const blogList = document.getElementById("blogList");

if (blogList) {
  loadBlogs();
}

async function loadBlogs() {
  const snapshot = await getDocs(collection(db, "blogs"));
  blogList.innerHTML = ""; // Clear before adding

  snapshot.forEach(docSnap => {
    const blog = docSnap.data();

    const div = document.createElement("div");
    div.className = "blog-card"; // Use consistent blog-card class

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
    const blogContainer = document.createElement("div");
    blogContainer.className = "blog-card"; // Wrap in blog-card for consistency
    blogContainer.innerHTML = `
      <h1>${blog.title}</h1>
      <p>${blog.content}</p>
    `;
    document.querySelector(".container").innerHTML = ""; // Clear container
    document.querySelector(".container").appendChild(blogContainer);
  } else {
    document.getElementById("title").innerText = "Blog Not Found";
    document.getElementById("content").innerText = "";
  }
}
document.getElementById("blogList").innerHTML = "<p>app.js is working!</p>";
