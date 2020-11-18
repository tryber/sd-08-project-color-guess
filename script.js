function randomColor() {
  const rgbColor = document.querySelector('#rgb-color');
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const stringColor = `(${red}, ${green}, ${blue})`;
  rgbColor.innerHTML = stringColor;
}

randomColor();

function createPalette() {
  for (let index = 0; index < 6; index += 1) {
    const ballColor = document.createElement('div');
    ballColor.className = 'ball';
    const palettecolor = document.querySelector('#palette-color');
    palettecolor.appendChild(ballColor);
  }
}

createPalette();
