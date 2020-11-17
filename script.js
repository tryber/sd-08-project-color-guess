const getColorSelected = document.getElementById('rgb-color');
const getOptionColor = document.getElementById('option-color');
let arrColor = [];
let colorSelected = '';

const createColorRandom = () => {
  for (let index = 0; index < 6; index += 1) {
    const getColorRandom1 = Math.ceil(Math.random() * 255);
    const getColorRandom2 = Math.ceil(Math.random() * 255);
    const getColorRandom3 = Math.ceil(Math.random() * 255);
    arrColor.push(`${getColorRandom1}, ${getColorRandom2}, ${getColorRandom3}`);
  }
  colorSelected = arrColor[Math.ceil(Math.random() * arrColor.length) - 1];
};
const createElementHTML = () => {
  for (let index = 0; index < 6; index += 1) {
    getOptionColor.innerHTML += `<div class="ball" style="background-color:rgb(${arrColor[0]})"></div>`;
  }
};
const setSelected = () => {
  getColorSelected.innerText = `RGB(${colorSelected})`;
};
window.onload = function () {
  createColorRandom();
  createElementHTML();
  setSelected();
  console.log(arrColor);
  console.log(colorSelected);
};
