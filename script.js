// Gera um código RGB
let rgb;
const gessColor = document.getElementById("rgb-color");
function generateRGB() {
  createColor(1);
  gessColor.innerHTML = rgb;
}
generateRGB();
// Cria as cores
function createColor(numberOfColors) {
  let colors = [];
  for (let color = 0; color < numberOfColors; color += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    rgb = `RGB(${r}, ${g}, ${b})`;
    colors.push(rgb);
  }
  return colors;
}

// Gera os círculos para receberem as cores
function createColorBall(numberOfBalls) {
  for (let ball = 0; ball < numberOfBalls; ball += 1) {
    const colorContainer = document.getElementById('color-container');
    let color = document.createElement('div');
    color.className = 'ball';
    colorContainer.appendChild(color);
  }
}
createColorBall(6)

// Insere as cores nos círculos
function insertColors() {
  // Define um array com as cores e troca um dos valores do array pelo valor sorteado 
  let ballColors = createColor(6);
  let rightColor = Math.floor(Math.random() * 6);
  ballColors[rightColor] = gessColor.innerHTML;
  // Insere as cores
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < ballColors.length; index += 1) {
    balls[index].style.backgroundColor = ballColors[index];
  }
}
insertColors()
