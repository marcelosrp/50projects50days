const labels = document.querySelectorAll(".form-item label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (el, index) =>
        `<span style="transition-delay:${index * 50}ms">${el}</span>`
    )
    .join("");
});
