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

// JavaScript Variables Demo
document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to JavaScript Lecture 5: Variables!");
  console.log("What you'll learn:");
  console.log("1. What is a Variable?");
  console.log("2. Primitive vs Reference Types");
  console.log("3. Dynamic Typing in JavaScript");
  console.log("4. Variable Declaration Keywords");

  // Demonstrate primitive types
  console.log("\n=== PRIMITIVE TYPES (Stored by value) ===");

  let a; // undefined
  console.log("let a; // undefined ->", a, "| typeof:", typeof a);

  let b = null; // null
  console.log("let b = null; ->", b, "| typeof:", typeof b, "(known bug!)");

  let c = true; // boolean
  console.log("let c = true; ->", c, "| typeof:", typeof c);

  let d = 3.14; // number
  console.log("let d = 3.14; ->", d, "| typeof:", typeof d);

  let e = 123n; // bigint
  console.log("let e = 123n; ->", e, "| typeof:", typeof e);

  let f = "DevReady"; // string
  console.log('let f = "DevReady"; ->', f, "| typeof:", typeof f);

  let g = Symbol("id"); // symbol
  console.log('let g = Symbol("id"); ->', g, "| typeof:", typeof g);

  console.log("\n=== REFERENCE TYPES (Stored by reference) ===");

  let obj = { x: 1, y: 2 }; // object
  console.log("let obj = { x: 1, y: 2 }; ->", obj, "| typeof:", typeof obj);

  let arr = [1, 2, 3]; // array (special object)
  console.log("let arr = [1, 2, 3]; ->", arr, "| typeof:", typeof arr);

  function fn() {
    return "Hello!";
  } // function
  console.log("function fn() {...} ->", fn, "| typeof:", typeof fn);

  let date = new Date(); // date object
  console.log("let date = new Date(); ->", date, "| typeof:", typeof date);

  let regex = /ab+c/; // regexp object
  console.log("let regex = /ab+c/; ->", regex, "| typeof:", typeof regex);

  console.log("\n=== Dynamic Typing Demo ===");
  let dynamicVar = 42;
  console.log("dynamicVar =", dynamicVar, "| Type:", typeof dynamicVar);

  dynamicVar = "Now I'm a string!";
  console.log("dynamicVar =", dynamicVar, "| Type:", typeof dynamicVar);

  dynamicVar = { message: "Now I'm an object!" };
  console.log("dynamicVar =", dynamicVar, "| Type:", typeof dynamicVar);

  console.log("\n=== Key Difference: Value vs Reference ===");
  // Primitive - copied by value
  let num1 = 5;
  let num2 = num1; // copies the value
  num2 = 10;
  console.log("Primitive: num1 =", num1, ", num2 =", num2); // num1 is still 5

  // Reference - copied by reference
  let obj1 = { count: 5 };
  let obj2 = obj1; // copies the reference
  obj2.count = 10;
  console.log(
    "Reference: obj1.count =",
    obj1.count,
    ", obj2.count =",
    obj2.count
  ); // both are 10!

  console.log(
    "\nVariables are named containers that can hold primitive or reference types!"
  );
});
