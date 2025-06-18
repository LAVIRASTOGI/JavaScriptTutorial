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
    overlay.addEventListener("click", function () {
      toggleSidebar();
    });
  }

  // Close sidebar with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const sidebar = document.getElementById("sidebar");
      const overlay = document.getElementById("sidebarOverlay");

      if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      }
    }
  });

  // Handle responsive behavior
  function handleResize() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");

    if (window.innerWidth > 768) {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    }
  }

  window.addEventListener("resize", handleResize);
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }
});

// Add active state to current page in sidebar
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  sidebarLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (linkHref && linkHref.includes(currentPage)) {
      link.classList.add("active");
    }
  });
});
