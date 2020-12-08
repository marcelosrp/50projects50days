const boxes = [...document.querySelectorAll(".box")];

function scrollBoxes() {
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < window.innerHeight) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

scrollBoxes();
window.addEventListener("scroll", scrollBoxes);
