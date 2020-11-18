const ball = document.querySelectorAll(".ball");
const answer = document.querySelector("#answer");
const reset = document.querySelector("#reset-game");
const rgbColor = document.querySelector("#rgb-color");
const score = document.querySelector("#score");
let resultado = 0,
  r,
  g,
  b;

window.onload = gerarCor();

function randomRgb(a, b) {
  return Math.floor(Math.random() * (b - a + 1));
}

function gerarCor() {
  for (let index = 0; index < 6; index += 1) {
    r = randomRgb(0, 255);
    g = randomRgb(0, 255);
    b = randomRgb(0, 255);
    ball[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

addEventListener("click", function (e) {
  if (e.target.className === "ball") {
    const cor = e.target.style.backgroundColor;
    if (cor === "rgb" + rgbColor.textContent) placar();
    else answer.textContent = "Errou! Tente novamente!";
  }
});

reset.addEventListener("click", function () {
  gerarCor();
  r = randomRgb(0, 255);
  g = randomRgb(0, 255);
  b = randomRgb(0, 255);
  rgbColor.textContent = `(${r}, ${g}, ${b})`;
  answer.textContent = "Escolha uma cor";
});

function placar() {
  answer.textContent = "Acertou!";
  resultado += 3;
  score.textContent = resultado;
}
