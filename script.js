const balls = document.getElementsByClassName('ball');
const textColor = document.getElementById('rgb-color');
const textAnswer = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const colors = [];

function randomNumber(mul) {
    const numero = Math.floor(Math.random() * mul);
    return numero;
}

function randomColor() {
  const rgb = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
  return rgb;
}

function clickBall(event) {
  const corSelecionada = event.target.style.backgroundColor;
  if (corSelecionada === textColor.textContent) {
    textAnswer.textContent = 'Acertou!';
  } else {
    textAnswer.textContent = 'Errou! Tente novamente!';
  }
}

for (let ball = 0; ball < balls.length; ball += 1) {
  const color = randomColor();
  balls[ball].style.backgroundColor = color;
  colors[ball] = color;
  balls[ball].addEventListener('click', clickBall);
}

function namedRandomColor() {
  textColor.textContent = colors[randomNumber(6)];
}

namedRandomColor();

function resetGame() {
  window.location.reload();
}

resetButton.addEventListener('click', resetGame);