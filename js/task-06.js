const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length ===
    Number(input.getAttribute("data-length"))
  ) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.add("valid");
  }
});
