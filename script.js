function generateColorRGB(numberOfColors) {
  const assortedColors = [];
  for (let indexColor = 0; indexColor < numberOfColors; indexColor += 1) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    assortedColors.push(`(${red}, ${green}, ${blue})`);
  }
  return assortedColors;
}
function createBallElements(numberOfBalls) {
  const sectionBalls = document.getElementById('color-control');
  const chosenColor = document.getElementById('chosen-color');
  const assortedColors = generateColorRGB(numberOfBalls);
  chosenColor.innerText = assortedColors[Math.floor(Math.random() * 6)];
  for (let indexBall = 0; indexBall < numberOfBalls; indexBall += 1) {
    const divBall = document.createElement('div');
    divBall.classList.add('ball');
    divBall.style.backgroundColor = `rgb${assortedColors[indexBall]}`;
    sectionBalls.appendChild(divBall);
  }
}
function checkAttempt() {
  const balls = document.querySelectorAll('.ball');
  const chosenColor = document.getElementById('chosen-color');
  const answer = document.getElementById('answer');
  for (let indexBall = 0; indexBall < balls.length; indexBall += 1) {
    balls[indexBall].addEventListener('click', function (event) {
      if (
        event.target.style.backgroundColor === `rgb${chosenColor.innerText}`
      ) {
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}
function resetGame() {
  const sectionColors = document.querySelector('#color-control');
  const answer = document.getElementById('answer');
  while (sectionColors.firstChild) {
    sectionColors.removeChild(sectionColors.firstChild);
  }
  createBallElements(6);
  checkAttempt();
  answer.innerText = 'Escolha uma cor';
}
function newGame() {
  const btnNewGame = document.getElementById('reset-game');
  btnNewGame.addEventListener('click', function () {
    resetGame();
  });
}
newGame();
window.onload = function () {
  createBallElements(6);
  checkAttempt();
};
