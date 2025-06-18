// Demonstrate all three methods
console.log("🌐 Method 1: You're seeing this in the Browser Console!");

// This page demonstrates Method 2: HTML + CSS + JS Integration
console.log(
  "📄 Method 2: This page is an example of HTML + CSS + JS working together!"
);

console.log(
  "⚡ Method 3: Node.js - Download from nodejs.org to try server-side JavaScript!"
);

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
