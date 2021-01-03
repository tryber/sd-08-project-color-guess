function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function insertPlacar() {
  const insert = document.querySelector('#score').innerHTML;
  if (insert === '') {
    const placar = 0;
    document.querySelector('#score').innerHTML = `Placar: ${placar}`;
  }
}
insertPlacar();

function randomColors() {
  const rgb = `(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  document.querySelector('#rgb-color').innerHTML = rgb;
  document.querySelector('#rgb-color').style.backgroundColor = `rgb${rgb}`;
  const rgb1 = `(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  const rgb2 = `(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  const rgb3 = `(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  const rgb4 = `(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  const rgb5 = `(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  const rgb6 = `(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  document.querySelector('#ball1').style.backgroundColor = `rgb${rgb1}`;
  document.querySelector('#ball2').style.backgroundColor = `rgb${rgb2}`;
  document.querySelector('#ball3').style.backgroundColor = `rgb${rgb3}`;
  document.querySelector('#ball4').style.backgroundColor = `rgb${rgb4}`;
  document.querySelector('#ball5').style.backgroundColor = `rgb${rgb5}`;
  document.querySelector('#ball6').style.backgroundColor = `rgb${rgb6}`;
  const colorOrder = getRandomInt(1, 6);
  document.querySelector(`#ball${colorOrder}`).style.backgroundColor = `rgb${rgb}`;
  document.querySelector('#resposta').innerHTML = `Será que está na ${colorOrder}a posição?`;
}
randomColors();

function sumPoints() {
  const string = document.querySelector('#score').innerHTML;
  let points = string.split('').filter((n) => (Number.parseFloat(n) || parseFloat(n) === 0)).join('');
  points = parseFloat(points) + 3;
  document.querySelector('#score').innerHTML = `Placar: ${points}`;
}

function subPoints() {
  const string = document.querySelector('#score').innerHTML;
  let points = string.split('').filter((n) => (Number.parseFloat(n) || parseFloat(n) === 0)).join('');
  points = parseFloat(points) - 3;
  document.querySelector('#score').innerHTML = `Placar: ${points}`;
  if (points <= 0) {
    document.querySelector('#miseravi').innerHTML = 'Para de errar gente';
    document.querySelector('#score').innerHTML = 'Placar: 0';
  }
}

document.querySelector('.colors').addEventListener('click', (event) => {
  const rgb = document.querySelector('#rgb-color').innerHTML;
  if (event.target.style.backgroundColor === `rgb${rgb}`) {
    document.querySelector('#answer').innerHTML = 'Acertou!';
    document.querySelector('#miseravi').innerHTML = 'Aaaahhhh Miserááááávi, acertô !!!';
    sumPoints();
  } else {
    document.querySelector('#answer').innerHTML = 'Errou! Tente novamente!';
    document.querySelector('#miseravi').innerHTML = 'Errou feio, errou rude !!!';
    subPoints();
  }
});

document.querySelector('#reset-game').addEventListener('click', () => {
  const string = document.querySelector('#score').innerHTML;
  const points = string.split('').filter((n) => (Number.parseFloat(n) || parseFloat(n) === 0)).join('');
  const placarReload = points;
  randomColors();
  document.querySelector('#score').innerHTML = `Placar: ${placarReload}`;
  document.querySelector('#answer').innerHTML = 'Escolha uma cor';
  document.querySelector('#miseravi').innerHTML = '';
});

document.querySelector('#dificult').addEventListener('click', () => {
  document.querySelector('#rgb-color').style.backgroundColor = 'rgb(169, 169, 169)';
});
