const $plusBtn = document.querySelector(".plus-btn");
const $minusBtn = document.querySelector(".minus-btn");
const $resetBtn = document.querySelector(".reset-btn");
const $counterInput = document.querySelector("#count-input");
const $display = document.querySelector(".display-number");

$plusBtn.addEventListener(
  "click",
  (event) => ($display.innerText = calculateDisplayNumber(event))
);

$minusBtn.addEventListener(
  "click",
  (event) => ($display.innerText = calculateDisplayNumber(event))
);

$resetBtn.addEventListener("click", () => {
  $display.innerText = 0;
  $counterInput.value = 1;
});

$counterInput.addEventListener("change", () => {
  // 숫자가아닌 문자가 들어올때 값을 1로 변경.
  if (Number.isNaN($counterInput.valueAsNumber)) {
    $counterInput.value = 1;
  }
  // 값이 음수일때 1로 변경
  else if ($counterInput.valueAsNumber < 0) {
    $counterInput.value = 1;
  }
});

function calculateDisplayNumber({ target: { className } }) {
  return className === "plus-btn"
    ? Number($display.innerText) + Number($counterInput.value)
    : Number($display.innerText) - Number($counterInput.value);
}
