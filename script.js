const cores = document.getElementById('cores');
const rgbColor = document.getElementById('rgb-color')
const answerText = document.getElementById('answer')
let placar = 0
let answer = false

function randomColor(ball) {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);

  let color = `rgb(${r}, ${g}, ${b})`

  ball.style.backgroundColor = color;
}

function checaResposta(evento) {
  const rgbColor = document.getElementById('rgb-color').innerText;

  if (evento.style.backgroundColor === `rgb${rgbColor}`) {
    answerText.innerText = 'Acertou!';
    placar += 3
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

function selecionaCor(event) {
  if (answer === false) {
    let evento = event.target;
    evento.style.border = 'solid 2px red';
    checaResposta(evento);
    answer = true;
  }
}

function geraCorPergunta() {
  let random = Math.round(Math.random() * 6);
  const divCores = document.querySelectorAll('.ball');

  let rgbText = (divCores[random].style.backgroundColor).slice(3);
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

  answerText.innerText = 'Escolha uma cor'
  geraCorPergunta();
}

geraDivsCores();
