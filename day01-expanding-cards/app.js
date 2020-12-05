function collapse() {
  const main = document.querySelector(".main");
  const item = document.querySelectorAll(".item");
  const children = Array.from(main.children);

  item.forEach((div) => {
    div.addEventListener("click", () => {
      children.forEach((child) => {
        child.classList.remove("active");
      });

      div.classList.add("active");
    });
  });
}

collapse();
