const $passwordInput = document.querySelector("#password");
const $chars = document.querySelector("#chars");
const $strength = document.querySelector("#strength");
const $indicators = document.querySelectorAll(".indicators > span");
const $progressBar = document.querySelector(".progress-bar");

$passwordInput.addEventListener("input", (e) => {
  const password = e.target.value;
  checkStrength(password, password.length);
});

const checkStrength = (password, length) => {
  let hasLowerCase = /[a-z]/.test(password);
  let hasUpperCase = /[A-Z]/.test(password);
  let hasNumber = /[0-9]/.test(password);
  let hasSymbols = /[^(0-9a-zA-Z)]/.test(password);
  const satisfiedCondition =
    +hasLowerCase + +hasUpperCase + +hasNumber + +hasSymbols; // 단항 연산자(+) boolean로 숫자로 형변환

  // length 길이 표시
  $chars.textContent = length;

  // 조건의 변화가 있을때 indicator 표시
  if (hasLowerCase) {
    $indicators[0].classList.remove("false");
    $indicators[0].classList.add("true");
  } else if (!hasLowerCase) {
    $indicators[0].classList.remove("true");
    $indicators[0].classList.add("false");
  }
  if (hasUpperCase) {
    $indicators[1].classList.remove("false");
    $indicators[1].classList.add("true");
  } else if (!hasUpperCase) {
    $indicators[1].classList.remove("true");
    $indicators[1].classList.add("false");
  }
  if (hasNumber) {
    $indicators[2].classList.remove("false");
    $indicators[2].classList.add("true");
  } else if (!hasNumber) {
    $indicators[2].classList.remove("true");
    $indicators[2].classList.add("false");
  }
  if (hasSymbols) {
    $indicators[3].classList.remove("false");
    $indicators[3].classList.add("true");
  } else if (!hasSymbols) {
    $indicators[3].classList.remove("true");
    $indicators[3].classList.add("false");
  }

  // strength 문자, progressbar 표시
  switch (satisfiedCondition) {
    case 1: {
      if (length <= 14) {
        $strength.textContent = "Weak";
        $progressBar.style.width = "25%";
        $progressBar.style.background = "red";
      }
      if (length >= 15) {
        $strength.textContent = "Medium";
        $progressBar.style.width = "50%";
        $progressBar.style.background = "orange";
      }
      break;
    }
    case 2: {
      if (length <= 11) {
        $strength.textContent = "Weak";
        $progressBar.style.width = "25%";
        $progressBar.style.background = "red";
      }
      if (length >= 12) {
        $strength.textContent = "Medium";
        $progressBar.style.width = "50%";
        $progressBar.style.background = "orange";
      }
      break;
    }
    case 3: {
      if (length <= 8) {
        $strength.textContent = "Weak";
        $progressBar.style.width = "25%";
        $progressBar.style.background = "red";
      }
      if (length >= 9 && length < 17) {
        $strength.textContent = "Medium";
        $progressBar.style.width = "50%";
        $progressBar.style.background = "orange";
      }
      if (length >= 18) {
        $strength.textContent = "Strong";
        $progressBar.style.width = "100%";
        $progressBar.style.background = "green";
      }
      break;
    }
    case 4: {
      if (length <= 5) {
        $strength.textContent = "Weak";
        $progressBar.style.width = "20%";
        $progressBar.style.background = "red";
      }
      if (length >= 6 && length <= 17) {
        $strength.textContent = "Medium";
        $progressBar.style.width = "50%";
        $progressBar.style.background = "orange";
      }
      if (length >= 18) {
        $strength.textContent = "Strong";
        $progressBar.style.width = "100%";
        $progressBar.style.background = "green";
      }
      break;
    }
    default: {
      $progressBar.style.width = "0%";
    }
  }
};
