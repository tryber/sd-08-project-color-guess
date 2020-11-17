let color = document.getElementById("rgb-color");
const container = document.querySelector(".circles-container");
const answer = document.getElementById("answer");
const resetButton = document.getElementById("reset-game");

const randomRGBCode = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  color.innerHTML = `(${red}, ${green}, ${blue})`;
};

randomRGBCode();

const generateCircles = () => {
  for (let i = 0; i < 6; i += 1) {
    const circle = document.createElement("div");
    circle.className = "ball";

    container.appendChild(circle);
  }
};

generateCircles();

const handleRandomColors = () => {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
};

const randomCircleColor = () => {
  const circle = document.querySelectorAll(".ball");

  for (let i = 0; i < circle.length; i += 1) {
    circle[i].style.backgroundColor = handleRandomColors();
  }
};

randomCircleColor();

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("ball")) {
    if (
      event.target.style.backgroundColor.replace("rgb", "") === color.innerText
    ) {
      answer.innerHTML = "Acertou!";
    }

    answer.innerHTML = "Errou! Tente novamente!";
  }
});

resetButton.addEventListener("click", () => {
  location.reload();
});
