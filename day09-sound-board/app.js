const main = document.querySelector("main");
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.map((sound) => {
  createAudios(sound);
  createButtons(sound);
});

function createAudios(sound) {
  const audio = document.createElement("audio");
  audio.setAttribute("src", `sounds/${sound}.mp3`);
  audio.classList.add(sound);
  main.appendChild(audio);
}

function createButtons(sound) {
  const button = document.createElement("button");
  button.innerHTML = sound;
  button.setAttribute("data-button", sound);
  button.classList.add("btn");
  main.appendChild(button);
}

function reset() {
  sounds.forEach((sound) => {
    const song = document.getElementsByClassName(sound)[0];

    song.pause();
    song.currentTime = 0;
  });
}

const buttons = [...document.querySelectorAll(".btn")];

buttons.forEach((button) => {
  button.addEventListener("click", ({ target }) => {
    const dataButton = target.getAttribute("data-button");
    const audio = document.getElementsByClassName(dataButton)[0];
    reset();
    audio.play();
  });
});
