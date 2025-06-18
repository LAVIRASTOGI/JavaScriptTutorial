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
  overlay.addEventListener("click", toggleSidebar);
});

// Navigation functions
function goToLecture2() {
  // Redirect to lecture2.html
  window.location.href = "lecture2.html";
}

function goToLecture3() {
  // Redirect to lecture3.html
  window.location.href = "lecture3.html";
}

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
          toggleSidebar();
        }, 100);
      }
    });
  });
});

// Handle window resize
window.addEventListener("resize", function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (window.innerWidth > 768 && sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close sidebar after scrolling to section
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("sidebarOverlay");

        if (sidebar.classList.contains("active")) {
          setTimeout(() => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
          }, 300);
        }
      }
    });
  });
});
