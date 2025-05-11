// Function to download blog post content
function downloadBlog() {
  const blogTitle = document.querySelector(".card h4").innerText;
  const blogContent = document.querySelector(".card p").innerText;

  const blob = new Blob([blogTitle + "\n\n" + blogContent], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "System_Design_Blog.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Attach event listener to download button
document.getElementById("downloadBlog").addEventListener("click", downloadBlog);