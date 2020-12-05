const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const progressBar = document.querySelector(".progress-bar");
const steps = [...document.querySelectorAll(".step")];

const maxSteps = 4;
let currentStep = 1;

let currentProgress = 0;
const maxProgress = 100;
let progress = maxProgress / (maxSteps - 1);

function prev() {
  steps[currentStep - 1].classList.remove("active");
  currentStep -= 1;
  progressBar.style.width = `${currentProgress - progress}%`;
  currentProgress -= progress;
  btnNext.disabled = false;
  if (currentStep === 1) {
    btnPrev.disabled = true;
    progressBar.style.width = "0";
  }
}

function next() {
  steps[currentStep].classList.add("active");
  currentStep += 1;
  progressBar.style.width = `${currentProgress + progress}%`;
  currentProgress += progress;
  btnPrev.disabled = false;
  if (currentStep === maxSteps) {
    btnNext.disabled = true;
    progressBar.style.width = "100%";
  }
}

btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", prev);
