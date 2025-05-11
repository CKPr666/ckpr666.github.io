const blogContainer = document.getElementById("blogContainer");

// Sample blogs stored dynamically (can be extended)
const blogs = [
  { title: "Tech Innovations in 2025", content: "Latest advancements in AI, blockchain, and space tech.", category: "Tech" },
  { title: "Mastering JavaScript", content: "Best practices and key concepts for efficient coding.", category: "Coding" },
  { title: "Healthy Habits for Developers", content: "Tips for maintaining productivity while staying healthy.", category: "Lifestyle" }
];

// Function to display blogs
function renderBlogs() {
  blogContainer.innerHTML = "";
  blogs.forEach(blog => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    blogCard.setAttribute("data-category", blog.category);
    blogCard.innerHTML = `
      <h4>${blog.title}</h4>
      <p>${blog.content}</p>
      <button class="download-btn">Download</button>
    `;
    blogContainer.appendChild(blogCard);
  });

  attachDownloadListeners();
}

// Filter blogs by category
function filterBlogs(category) {
  const blogCards = document.querySelectorAll(".blog-card");
  blogCards.forEach(blog => {
    if (category === "all" || blog.getAttribute("data-category") === category) {
      blog.style.display = "block";
    } else {
      blog.style.display = "none";
    }
  });
}

// Add a new blog dynamically
function addBlog() {
  const title = document.getElementById("blogTitle").value;
  const content = document.getElementById("blogContent").value;
  const category = document.getElementById("blogCategory").value;

  if (title && content) {
    blogs.push({ title, content, category });
    renderBlogs();
  } else {
    alert("Please fill all fields!");
  }
}

// Download blog post
function attachDownloadListeners() {
  document.querySelectorAll(".download-btn").forEach(button => {
    button.addEventListener("click", function() {
      const blogTitle = this.parentElement.querySelector("h4").innerText;
      const blogContent = this.parentElement.querySelector("p").innerText;

      const blob = new Blob([blogTitle + "\n\n" + blogContent], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = blogTitle.replace(/\s+/g, "_") + ".txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
}

// Initialize blogs
renderBlogs();