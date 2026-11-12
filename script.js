// Mobile navigation toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    // Swap between hamburger and close icon
    menuToggle.textContent = isOpen ? "✕" : "☰"; 
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Project category filters
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // Remove active state from all buttons, add to clicked button
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    // Show/hide project cards based on the selected category
    projectCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filter === "all" || category === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

// Dynamic footer copyright year
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Profile image fallback (logs a warning if the image path is broken)
const profileImage = document.querySelector(".profile-photo");

if (profileImage) {
  profileImage.addEventListener("error", () => {
    console.warn("Profile image not found. Check that images/profile.png exists.");
  });
}