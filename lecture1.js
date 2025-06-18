// Sidebar functionality
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Close sidebar when clicking on overlay
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("sidebarOverlay");
  if (overlay) {
    overlay.addEventListener("click", toggleSidebar);
  }
});

// Handle sidebar link clicks
document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Don't close sidebar for disabled links
      if (this.classList.contains("disabled")) {
        e.preventDefault();
        return;
      }

      // Close sidebar when navigating (except for home link)
      if (!this.getAttribute("href").startsWith("#")) {
        setTimeout(() => {
          const sidebar = document.getElementById("sidebar");
          const overlay = document.getElementById("sidebarOverlay");
          if (sidebar && overlay) {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
          }
        }, 100);
      }
    });
  });
});

// Handle window resize
window.addEventListener("resize", function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (window.innerWidth > 768 && sidebar && overlay) {
    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    }
  }
});

// JavaScript Introduction Demo
document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to JavaScript Lecture 1: Introduction to JavaScript!");
  console.log("What you'll learn:");
  console.log("1. What is JavaScript?");
  console.log("2. JavaScript Features & Capabilities");
  console.log("3. JavaScript History & Evolution");
  console.log("4. Modern JavaScript Applications");
});
