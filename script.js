function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const stringColor = `(${red}, ${green}, ${blue})`;
  return stringColor;
}

randomColor();

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
  controllerPainel.appendChild(answer);
}

answerQuest();

function result() {
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

result();
