const $form = document.querySelector("form");
const $input = document.querySelector(".number-input");
const $hintDisplay = document.querySelector(".hint");
const $currentNumberDisPlay = document.querySelector(".current-guess");
const $prevNumsDisplay = document.querySelector(".prev-nums");
const $startGameBtn = document.querySelector(".start-btn");
const $submitBtn = document.querySelector(".submit-btn");
const $lifeDisplay = document.querySelector(".life");
let life = 10;
let answer = null;
const prevNums = [];

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { result, message } = checkNumber($input.valueAsNumber);
  $currentNumberDisPlay.innerText = $input.valueAsNumber;
  $prevNumsDisplay.innerText = prevNums.join(" ");
  $hintDisplay.innerText = message;
  $lifeDisplay.innerText = life;

  if (result) {
    $submitBtn.disabled = true;
    $input.disabled = true;
    $startGameBtn.disabled = false;
  }
  //   life를 모두 소진했을때;
  else if (!life && !result) {
    $submitBtn.disabled = true;
    $input.disabled = true;
    $startGameBtn.disabled = false;
    $hintDisplay.innerText = `sorry, answer is ${answer} 😥`;
  }

  $form.reset();
});

$startGameBtn.addEventListener("click", () => {
  // 게임 리셋
  life = 10;
  answer = null;
  prevNums.length = 0;
  $submitBtn.disabled = false;
  $input.disabled = false;
  $startGameBtn.disabled = true;
  $currentNumberDisPlay.innerText = "null";
  $prevNumsDisplay.innerText = "";
  $hintDisplay.innerText = "";
  $lifeDisplay.innerText = "";
});

function checkNumber(num) {
  if (life === 10) answer = generateAnswer();
  prevNums.push(num);
  life -= 1;
  if (num === answer) return { result: true, message: "Correct answer!" };
  else if (num < answer) return { result: false, message: "Up!" };
  else {
    return { result: false, message: "Down!" };
  }
}

function generateAnswer() {
  return Math.trunc(Math.random() * 101);
}
