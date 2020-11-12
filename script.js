const options = document.getElementById('options');
const numberOpts = 6;

for (let index = 0; index < numberOpts; index += 1) {
  const circ = document.createElement('div');
  circ.className = 'ball';
  options.appendChild(circ);
}
