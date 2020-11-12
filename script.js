// Gera um código RGB
let rgb;
const gessColor = document.getElementById("rgb-color");
function generateNewChallenge() {
  createRGBColor(1);
  gessColor.innerHTML = rgb;
}
generateNewChallenge();
// Cria as cores
function createRGBColor(numberOfColors) {
  let colors = [];
  for (let color = 0; color < numberOfColors; color += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    rgb = `rgb(${r}, ${g}, ${b})`;
    colors.push(rgb);
  }
  return colors;
}

// Gera os círculos para receberem as cores
const colorContainer = document.getElementById('color-container');
function createEmptyBall(numberOfBalls) {
  for (let ball = 0; ball < numberOfBalls; ball += 1) {
    let color = document.createElement('div');
    color.className = 'ball';
    colorContainer.appendChild(color);
  }
}
createEmptyBall(6)

// Insere as cores nos círculos
function insertColors() {
  // Define um array com as cores e troca um dos valores do array pelo valor sorteado 
  let ballColors = createRGBColor(6);
  let rightColor = Math.floor(Math.random() * 6);
  ballColors[rightColor] = gessColor.innerHTML;
  // Insere as cores
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < ballColors.length; index += 1) {
    balls[index].style.backgroundColor = ballColors[index];
  }
}
insertColors()

// Apresentar o resultado
const answer = document.getElementById('answer');
colorContainer.addEventListener('click', (event) => {
  if (event.target.style.backgroundColor === gessColor.innerHTML) {  
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
});

// Reseta o jogo
const reset = document.getElementById('reset-game');
reset.addEventListener('click', () => {
  generateNewChallenge();
  insertColors();
  answer.innerHTML = 'Escolha uma cor';
})
