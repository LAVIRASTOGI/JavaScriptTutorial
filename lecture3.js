// Tech Dev Guru - JavaScript Tutorial Lecture 3
// Focus: Client-Server Requests & Browser Rendering

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  console.log("🎓 Welcome to JavaScript Tutorial Lecture 3!");
  console.log("📚 Today's Topic: Client-Server Requests & Browser Rendering");

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// Step 1: HTTP Request Demo
function showRequestDemo() {
  const resultDiv = document.getElementById("requestResult");

  resultDiv.innerHTML = `
    <div style="padding: 1rem;">
      <h4 style="color: #667eea; margin-bottom: 1rem;">🌐 HTTP Request Example</h4>
      <div style="background: #1a202c; color: white; padding: 1rem; border-radius: 8px; font-family: monospace; margin-bottom: 1rem;">
        <div style="color: #48bb78;">// Making a GET request</div>
        <div style="color: #4299e1;">fetch</div>('<span style="color: #fbbf24;">https://api.github.com/users/octocat</span>')<br>
        &nbsp;&nbsp;.then(<span style="color: #4299e1;">response</span> => response.json())<br>
        &nbsp;&nbsp;.then(<span style="color: #4299e1;">data</span> => console.log(data))<br>
        &nbsp;&nbsp;.catch(<span style="color: #f56565;">error</span> => console.error('Error:', error));
      </div>
      <div style="background: #e6fffa; border-left: 4px solid #38a169; padding: 1rem; border-radius: 4px;">
        <strong>What happens:</strong><br>
        1. Browser sends GET request to GitHub API<br>
        2. Server processes request and sends JSON response<br>
        3. Browser receives and parses the response<br>
        4. JavaScript handles the data
      </div>
    </div>
  `;

  // Log to console for demonstration
  console.log("📡 HTTP Request Demo:");
  console.log("1. Client sends request to server");
  console.log("2. Server processes and responds");
  console.log("3. Client receives and handles response");
}

// Step 2: Client-Server Communication Demo
function showCommunicationDemo() {
  const resultDiv = document.getElementById("communicationResult");

  // Simulate the communication process with animation
  resultDiv.innerHTML = `
    <div style="padding: 1rem;">
      <h4 style="color: #667eea; margin-bottom: 1rem;">🔄 Communication Flow Simulation</h4>
      <div id="commSteps" style="background: #f7fafc; padding: 1.5rem; border-radius: 8px;">
        <div class="comm-simulation-step" id="step1" style="margin-bottom: 1rem; opacity: 0.3;">
          <strong>Step 1:</strong> User clicks "Login" button
        </div>
        <div class="comm-simulation-step" id="step2" style="margin-bottom: 1rem; opacity: 0.3;">
          <strong>Step 2:</strong> Browser sends POST request to /login
        </div>
        <div class="comm-simulation-step" id="step3" style="margin-bottom: 1rem; opacity: 0.3;">
          <strong>Step 3:</strong> Server validates credentials
        </div>
        <div class="comm-simulation-step" id="step4" style="margin-bottom: 1rem; opacity: 0.3;">
          <strong>Step 4:</strong> Server sends success response
        </div>
        <div class="comm-simulation-step" id="step5" style="opacity: 0.3;">
          <strong>Step 5:</strong> Browser redirects to dashboard
        </div>
      </div>
      <div style="text-align: center; margin-top: 1rem;">
        <span id="statusText" style="font-weight: bold; color: #667eea;">Click to start simulation</span>
      </div>
    </div>
  `;

  // Animate the communication steps
  let currentStep = 0;
  const steps = ["step1", "step2", "step3", "step4", "step5"];
  const statusText = document.getElementById("statusText");

  function animateStep() {
    if (currentStep < steps.length) {
      const stepElement = document.getElementById(steps[currentStep]);
      stepElement.style.opacity = "1";
      stepElement.style.background = "#e6fffa";
      stepElement.style.padding = "0.5rem";
      stepElement.style.borderRadius = "4px";
      stepElement.style.transition = "all 0.5s ease";

      statusText.textContent = `Processing step ${currentStep + 1}...`;
      currentStep++;

      setTimeout(animateStep, 1000);
    } else {
      statusText.textContent = "Communication complete! ✅";
      statusText.style.color = "#38a169";
    }
  }

  setTimeout(animateStep, 500);
}

// Step 3: Browser Rendering Demo
function showRenderingDemo() {
  const resultDiv = document.getElementById("renderingResult");

  resultDiv.innerHTML = `
    <div style="padding: 1rem;">
      <h4 style="color: #667eea; margin-bottom: 1rem;">🖥️ Browser Rendering Process</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
        <div style="background: #fff5f5; border: 2px solid #fed7d7; padding: 1rem; border-radius: 8px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📄</div>
          <strong>HTML Parsing</strong>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Creates DOM tree from HTML structure</p>
        </div>
        <div style="background: #f0fff4; border: 2px solid #c6f6d5; padding: 1rem; border-radius: 8px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎨</div>
          <strong>CSS Processing</strong>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Builds CSSOM for styling</p>
        </div>
        <div style="background: #fffaf0; border: 2px solid #fbd38d; padding: 1rem; border-radius: 8px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚡</div>
          <strong>JavaScript Execution</strong>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Runs scripts and modifies DOM</p>
        </div>
        <div style="background: #ebf8ff; border: 2px solid #90cdf4; padding: 1rem; border-radius: 8px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🖼️</div>
          <strong>Render & Paint</strong>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Displays final visual result</p>
        </div>
      </div>
      <div style="background: #f7fafc; border: 1px solid #e2e8f0; padding: 1rem; border-radius: 8px;">
        <strong>Critical Rendering Path:</strong><br>
        HTML → DOM → CSSOM → Render Tree → Layout → Paint → Composite
      </div>
    </div>
  `;

  console.log("🖥️ Browser Rendering Process:");
  console.log("1. Parse HTML to create DOM");
  console.log("2. Parse CSS to create CSSOM");
  console.log("3. Execute JavaScript");
  console.log("4. Combine DOM + CSSOM = Render Tree");
  console.log("5. Layout (calculate positions)");
  console.log("6. Paint (draw pixels)");
  console.log("7. Composite (layer combination)");
}

// Interactive Request Simulator
function simulateRequest() {
  const method = document.getElementById("httpMethod").value;
  const url = document.getElementById("requestUrl").value;
  const statusIndicator = document.getElementById("statusIndicator");
  const responseDisplay = document.getElementById("responseDisplay");

  if (!url) {
    responseDisplay.textContent = "Please enter a URL";
    return;
  }

  // Update status
  statusIndicator.textContent = "Sending...";
  statusIndicator.style.background = "#f6ad55";

  responseDisplay.textContent = `Sending ${method} request to ${url}...`;

  // Simulate request delay
  setTimeout(() => {
    // For demo purposes, simulate different responses
    if (url.includes("github.com")) {
      simulateGitHubResponse(method, url);
    } else if (url.includes("jsonplaceholder")) {
      simulateJsonPlaceholderResponse(method, url);
    } else {
      simulateGenericResponse(method, url);
    }
  }, 1500);
}

function simulateGitHubResponse(method, url) {
  const statusIndicator = document.getElementById("statusIndicator");
  const responseDisplay = document.getElementById("responseDisplay");

  statusIndicator.textContent = "Success";
  statusIndicator.style.background = "#48bb78";

  const mockResponse = {
    status: 200,
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
      "X-RateLimit-Limit": "60",
      "X-RateLimit-Remaining": "59",
    },
    data: {
      login: "octocat",
      id: 1,
      name: "The Octocat",
      company: "GitHub",
      location: "San Francisco",
      public_repos: 8,
      followers: 9000,
      following: 9,
    },
  };

  responseDisplay.textContent = JSON.stringify(mockResponse, null, 2);

  console.log(`📡 Simulated ${method} request to ${url}`);
  console.log("Response:", mockResponse);
}

function simulateJsonPlaceholderResponse(method, url) {
  const statusIndicator = document.getElementById("statusIndicator");
  const responseDisplay = document.getElementById("responseDisplay");

  statusIndicator.textContent = "Success";
  statusIndicator.style.background = "#48bb78";

  const mockResponse = {
    status: 200,
    method: method,
    url: url,
    data: {
      userId: 1,
      id: 1,
      title: "Sample Post Title",
      body: "This is a sample response from JSONPlaceholder API for demonstration purposes.",
    },
  };

  responseDisplay.textContent = JSON.stringify(mockResponse, null, 2);
}

function simulateGenericResponse(method, url) {
  const statusIndicator = document.getElementById("statusIndicator");
  const responseDisplay = document.getElementById("responseDisplay");

  statusIndicator.textContent = "Success";
  statusIndicator.style.background = "#48bb78";

  const mockResponse = {
    status: 200,
    method: method,
    url: url,
    timestamp: new Date().toISOString(),
    message: "This is a simulated response for demonstration purposes.",
    data: {
      success: true,
      requestId: Math.random().toString(36).substr(2, 9),
    },
  };

  responseDisplay.textContent = JSON.stringify(mockResponse, null, 2);
}

// Educational console messages
console.log(`
🎓 JavaScript Tutorial - Lecture 3
📝 Topic: Client-Server Requests & Browser Rendering

🔸 HTTP Methods: GET, POST, PUT, DELETE
🔸 Request-Response Cycle
🔸 Browser Rendering Process

💡 Key Concepts:
• Client sends HTTP requests to server
• Server processes and sends responses
• Browser renders HTML, CSS, and JavaScript
• DOM and CSSOM combine to create render tree

🚀 Understanding web communication is essential for web development!
`);

// Demonstrate the concepts
console.log("🌐 Client-Server Communication:");
console.log(
  "1. User Action → 2. HTTP Request → 3. Server Processing → 4. Response → 5. Browser Rendering"
);

console.log("🖥️ Browser Rendering Pipeline:");
console.log(
  "HTML → DOM → CSS → CSSOM → Render Tree → Layout → Paint → Display"
);

console.log(
  "📡 Try the interactive request simulator to see HTTP requests in action!"
);

// Example of how requests work in practice
console.log("🔧 Example: Real HTTP Request");
console.log("fetch('https://api.example.com/data')");
console.log("  .then(response => response.json())");
console.log("  .then(data => console.log(data));");

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
