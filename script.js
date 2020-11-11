// Gera um código RGB
let rgb;
function generateRGB() {
  const gessColor = document.getElementById('rgb-color');
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  rgb = `(${r}, ${g}, ${b})`
  gessColor.innerHTML = rgb;
}
generateRGB();
