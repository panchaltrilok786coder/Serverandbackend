const blogs = [
  {
    id: 1,
    title: "First Blog",
    content: "This is my first blog post."
  },
  {
    id: 2,
    title: "Second Blog",
    content: "This is another blog post."
  }
];

// Show blogs on homepage
const blogList = document.getElementById("blogList");

if (blogList) {
  blogs.forEach(blog => {
    const div = document.createElement("div");
    div.className = "blog-card";

    div.innerHTML = `
      <h3>${blog.title}</h3>
      <a href="blog.html?id=${blog.id}" class="btn">Read More</a>
    `;

    blogList.appendChild(div);
  });
}

// Show single blog
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id) {
  const blog = blogs.find(b => b.id == id);
  document.getElementById("title").innerText = blog.title;
  document.getElementById("content").innerText = blog.content;
}
