const URL =
  "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes";

const jokeText = document.querySelector(".wrapper p");
const button = document.querySelector(".btn");

async function getJoke() {
  const response = await fetch(URL);
  const { setup, punchline } = await response.json();

  jokeText.innerHTML = `- ${setup} <br /> - ${punchline}`;
}

button.addEventListener("click", getJoke);

getJoke();
