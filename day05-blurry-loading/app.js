const counter = document.querySelector(".counter");
const main = document.querySelector(".main");

let count = 0;

function blurring() {
  count++;

  count > 99 && clearInterval(int);

  counter.innerText = `${count}%`;
  counter.style.opacity = scale(count, 0, 100, 1, 0);
  main.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
}

let int = setInterval(blurring, 30);

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
