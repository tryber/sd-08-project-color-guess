const options = document.getElementById('options');
const numberOpts = 6;

for (let index = 0; index < numberOpts; index += 1) {
  const circ = document.createElement('div');
  circ.className = 'ball';
  options.appendChild(circ);
}

const circles = document.getElementsByClassName('ball');
function colorCircles() {
  for (let index = 0; index < circles.length; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    circles[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}
colorCircles();
