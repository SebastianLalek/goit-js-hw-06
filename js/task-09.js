function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

btn.addEventListener("click", (event) => {
  const currentColor = getRandomHexColor();

  colorValue.textContent = currentColor;
  document.body.style.backgroundColor = currentColor;
});
