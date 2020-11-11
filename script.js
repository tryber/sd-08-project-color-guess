// Gera um código RGB
let rgb;
function generateRGB() {
  const gessColor = document.getElementById("rgb-color");
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  rgb = `(${r}, ${g}, ${b})`;
  gessColor.innerHTML = rgb;
}
generateRGB();

function createColor(numberOfBalls) {
  for (let ball = 0; ball < numberOfBalls; ball += 1) {
    const colorContainer = document.getElementById('color-container');
    let color = document.createElement('div');
    color.className = 'ball';
    colorContainer.appendChild(color);
  }
}
createColor(6)