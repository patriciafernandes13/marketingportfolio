lucide.createIcons();

/* EMAIL POPUP */

function openEmailPopup() {
  document.getElementById("email-popup").classList.remove("hidden");
}

function closeEmailPopup() {
  document.getElementById("email-popup").classList.add("hidden");
}

function copyEmail() {
  navigator.clipboard.writeText("tita1099@gmail.com");

  const button = document.querySelector(".copy-btn");

  button.innerText = "Copied!";

  setTimeout(() => {
    button.innerText = "Copy Email";
  }, 2000);
}
