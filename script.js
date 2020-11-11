const cores = document.getElementById('cores');
const rgbColor = document.getElementById('rgb-color');
const answerText = document.getElementById('answer');
const btnReset = document.getElementById('reset-game');
let placar = document.getElementById('score');
let score = 0;
let answer = false;

function randomColor(ball) {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  const color = `rgb(${r}, ${g}, ${b})`;

  ball.style.backgroundColor = color;
}

function checaResposta(evento) {
  const rgbText = document.getElementById('rgb-color').innerText;

  if (evento.style.backgroundColor === `rgb${rgbText}`) {
    answerText.innerText = 'Acertou!';
    score += 3;
    placar.innerText = `Placar: ${score}`;
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

function selecionaCor(event) {
  if (answer === false) {
    const evento = event.target;
    evento.style.border = 'solid 2px red';
    checaResposta(evento);
    answer = true;
  }
}

function geraCorPergunta() {
  const random = Math.round(Math.random() * 5);
  const divCores = document.querySelectorAll('.ball');

  const rgbText = (divCores[random].style.backgroundColor).slice(3);
  rgbColor.innerText = rgbText;
}

function geraDivsCores() {
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');

    randomColor(ball);

    ball.className = 'ball';
    ball.addEventListener('click', selecionaCor);
    cores.append(ball);
  }

  answerText.innerText = 'Escolha uma cor';
  geraCorPergunta();
}

function limpaDivsCores() {
  const balls = document.querySelectorAll('.ball');

  for (let index = 0; index < balls.length; index += 1) {
    balls[index].remove();
  }
}

function resetGame() {
  limpaDivsCores();
  geraDivsCores();
  answer = false;
}

btnReset.addEventListener('click', resetGame);

geraDivsCores();
