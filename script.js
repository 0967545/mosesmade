document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navItems = navLinks.querySelectorAll("a");

  // Toggle menu open/close
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Auto-close menu when a link is clicked
  navItems.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
});
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const loader = submitBtn.querySelector(".loader");
const btnText = submitBtn.querySelector(".btn-text");
const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  successMsg.style.display = "none";
  errorMsg.style.display = "none";

  submitBtn.disabled = true;
  btnText.style.display = "none";
  loader.style.display = "block";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      successMsg.style.display = "block";
    } else {
      errorMsg.style.display = "block";
    }
  } catch (error) {
    errorMsg.style.display = "block";
  }

  submitBtn.disabled = false;
  btnText.style.display = "inline";
  loader.style.display = "none";
});
