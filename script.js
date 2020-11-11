let rgb_color_p = document.querySelector('#rgb-color');
rgb_color_p.innerText = randomColor();

function randomColor() { // Gera uma cor aleatória
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `(${r}, ${g}, ${b})`;
}
