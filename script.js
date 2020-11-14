function createBallElements(numberOfBalls) {
  const sectionBalls = document.getElementById('color-control');
  for (let indexBall = 1; indexBall <= numberOfBalls; indexBall += 1) {
    const divBall = document.createElement('div');
    divBall.classList.add('ball');
    sectionBalls.appendChild(divBall);
  }
}

window.onload = function () {
  createBallElements(6);
};
