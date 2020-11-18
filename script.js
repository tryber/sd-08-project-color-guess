const ball = document.getElementsByClassName('ball');
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const rgbColor = document.getElementById('rgb-color');
const score = document.getElementById('score');
let resultado = 0,
  r,
  g,
  b;

window.onload = gerarCor();
rgbColor.innerText = '(168, 34, 1)';
score.innerText = 'Placar: 0';
answer.innerText = 'Escolha uma cor';
reset.innerText = 'Reset';

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

addEventListener('click', function (e) {
  if (e.target.className === 'ball') {
    const cor = e.target.style.backgroundColor.slice(3);
    alert(cor)

    if (cor === 'rgb' + rgbColor.textContent) {
      answer.innerText = 'Acertou!';
      resultado += 3;
      score.innerText = `Placar: ${resultado}`;
    }
    else { answer.innerText = 'Errou! Tente novamente!'; }
  }
});

reset.addEventListener('click', function () {
  gerarCor();
  r = randomRgb(0, 255);
  g = randomRgb(0, 255);
  b = randomRgb(0, 255);
  rgbColor.innerText = `(${r}, ${g}, ${b})`;
  answer.innerText = 'Escolha uma cor';
});
