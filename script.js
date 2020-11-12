function getRandomNumber(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

function getRandomColor() {
  const rgb = [];
  for (let index = 0; index < 3; index += 1) {
    rgb.push(getRandomNumber(255));
  }
  return `(${rgb.join(', ')})`;
}

const rgbColor = document.getElementById('rgb-color');
rgbColor.textContent = getRandomColor();