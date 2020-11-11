function createDivs() {
  const divContainer = document.getElementById('ball-container');
  
  for (let i = 0; i < 6; i += 1) {
    const divBall = document.createElement('div');
    divBall.className = 'ball';
    divContainer.appendChild(divBall);
  }
}
createDivs();

function ramdomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return ('(' + r + ',' + g + ',' + b + ')');
}

const correctColor = ramdomColor();

const spanColor = document.getElementById('rgb-color');
spanColor.innerHTML = correctColor;

