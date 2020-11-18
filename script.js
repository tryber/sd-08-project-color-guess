const colors = document.querySelectorAll('.ball');

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const stringColor = `(${red}, ${green}, ${blue})`;
  return stringColor;
}

function createPalette() {
  for (let index = 0; index < 6; index += 1) {
    const ballColor = document.createElement('div');
    ballColor.className = 'ball';
    ballColor.style.backgroundColor = `rgb${randomColor()}`;
    const palettecolor = document.querySelector('#palette-color');
    palettecolor.appendChild(ballColor);
  }
}

createPalette();

function questColor() {
  const colors = document.querySelectorAll('.ball');
  const randomNumber = Math.floor(Math.random() * 5.99);
  const color = colors[randomNumber].style.backgroundColor;
  const rgbColor = document.querySelector('#rgb-color');
  rgbColor.innerHTML = color.slice(3);
}

questColor();

function answerQuest() {
  const answer = document.createElement('div');
  answer.id = 'answer';
  answer.innerHTML = 'Escolha uma cor';
  const controllerPainel = document.querySelector('#controller-painel');
  controllerPainel.prepend(answer);
}

answerQuest();

function eventResult() {
  const colors = document.querySelectorAll('.ball');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function (event) {
      const rgbColor = document.querySelector('#rgb-color');
      const answer = document.querySelector('#answer');
      if (answer.innerHTML == 'Escolha uma cor') {
        if (event.target.style.backgroundColor === `rgb${rgbColor.innerHTML}`) {
          answer.innerHTML = 'Acertou!';
        } else {
          answer.innerHTML = 'Errou! Tente novamente!';
        }
      }
    });
  }
}

eventResult();

function createButtonReset() {
  const buttonReset = document.createElement('button');
  buttonReset.id = 'reset-game';
  buttonReset.innerHTML = 'Resetar jogo/cores';
  const controllerPainel = document.querySelector('#controller-painel');
  controllerPainel.appendChild(buttonReset);
}

createButtonReset();

function eventReset() {
  const buttonResetSelection = document.querySelector('#reset-game');
  buttonResetSelection.addEventListener('click', function () {
    const colors = document.querySelectorAll('.ball');
    const palettecolor = document.querySelector('#palette-color');
    for (let index = 0; index < 6; index += 1) {
      palettecolor.removeChild(colors[index]);
    }
    createPalette();
    questColor();
    const controllerPainel = document.querySelector('#controller-painel');
    const answer = document.querySelector('#answer');
    controllerPainel.removeChild(answer);
    answerQuest();
    eventResult();
  })
}

eventReset();