const userInput = document.querySelector("#userInput");
const chipDisplay = document.querySelector(".chips-display");
let chipElement;

window.addEventListener("DOMContentLoaded", () => init());

userInput.addEventListener("input", ({ target: { value } }) =>
  updateDisplay(value)
);

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && userInput.value.length > 0) {
    e.preventDefault();
    addChipToDisplay();
    init();
  }
});

chipDisplay.addEventListener("click", (e) => {
  if (!e.target.classList.contains("remove-button")) return;
  const selectedChip = e.target.parentNode;
  removeChip(selectedChip);
});

const init = () => {
  chipElement = createChip();
  chipDisplay.appendChild(chipElement);
  userInput.value = "";
};

const updateDisplay = (text) => {
  if (!text.length) {
    chipElement.style.display = "none";
    return;
  }
  chipElement.style.display = "flex";
  chipElement.firstElementChild.textContent = text;
};

const createChip = () => {
  const chip = document.createElement("div");
  chip.classList.add("chip-item");

  const title = document.createElement("span");
  title.classList.add("title");

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");

  chip.style.display = "none";
  chip.append(title, removeButton);
  return chip;
};

const removeChip = (chip) => chipDisplay.removeChild(chip);

const addChipToDisplay = () => {
  chipElement.lastElementChild.style.display = "block";
};
