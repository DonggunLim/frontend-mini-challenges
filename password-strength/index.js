const $passwordInput = document.querySelector("#password");
const $chars = document.querySelector("#chars");
const $strength = document.querySelector("#strength");
const $indicators = document.querySelectorAll(".indicators > span");
const $progressBar = document.querySelector(".progress-bar");
const STRENGTH_INDEX = {
  Weak: {
    strength: "Weak",
    width: "20%",
    color: "red",
  },
  Medium: {
    strength: "Medium",
    width: "50%",
    color: "orange",
  },
  Strong: {
    strength: "Strong",
    width: "100%",
    color: "green",
  },
  Default: {
    strength: "",
    width: "0%",
    color: "red",
  },
};

$passwordInput.addEventListener("input", (e) => {
  const password = e.target.value;
  const { conditions } = getIndicatorConditions(password, password.length);
  const strengthData = getStrength(conditions, password.length);
  updateUI(conditions, password.length, strengthData);
});

const updateUI = (indicatorConditions, length, strengthData) => {
  $chars.textContent = length;
  $indicators.forEach(
    ($indicator, index) => ($indicator.className = indicatorConditions[index])
  );
  $strength.textContent = strengthData.strength;
  $progressBar.style.width = strengthData.width;
  $progressBar.style.background = strengthData.color;
};

const getIndicatorConditions = (password) => {
  const [hasLowerCase, hasUpperCase, hasNumber, hasSymbols] = [
    /[a-z]/.test(password),
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^(0-9a-zA-Z)]/.test(password),
  ];

  return { conditions: [hasLowerCase, hasUpperCase, hasNumber, hasSymbols] };
};

const getStrength = (conditions, passwordLength) => {
  const satisfiedConditionCount = conditions.filter(Boolean).length;
  if (!satisfiedConditionCount) return STRENGTH_INDEX["Default"];
  if (satisfiedConditionCount === 1) {
    return passwordLength >= 15
      ? STRENGTH_INDEX["Medium"]
      : STRENGTH_INDEX["Weak"];
  }

  if (satisfiedConditionCount === 2) {
    return passwordLength >= 12
      ? STRENGTH_INDEX["Medium"]
      : STRENGTH_INDEX["Weak"];
  }

  if (satisfiedConditionCount === 3) {
    if (passwordLength >= 18) return STRENGTH_INDEX["Strong"];
    return passwordLength >= 9
      ? STRENGTH_INDEX["Medium"]
      : STRENGTH_INDEX["Weak"];
  }

  if (satisfiedConditionCount === 4) {
    if (passwordLength >= 18) return STRENGTH_INDEX["Strong"];
    return passwordLength >= 6
      ? STRENGTH_INDEX["Medium"]
      : STRENGTH_INDEX["Weak"];
  }
};
