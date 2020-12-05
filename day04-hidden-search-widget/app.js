const form = document.querySelector(".form");
const input = document.querySelector(".input");
const button = document.querySelector(".submit");

function activeForm() {
  form.classList.toggle("inactive");
  !form.classList.contains("inactive") && input.focus();
}

button.addEventListener("click", activeForm);
