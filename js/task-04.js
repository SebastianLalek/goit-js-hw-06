const displayValue = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const updateValue = () => (displayValue.textContent = counterValue);

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});
