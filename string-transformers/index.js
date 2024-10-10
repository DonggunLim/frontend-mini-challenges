const $form = document.querySelector("#form");
const $userInput = document.querySelector("#userInput");

let userString = "";

$userInput.addEventListener("input", (e) => {
  userString = e.target.value;
  convertToLowerCase(userString);
  convertToUpperCase(userString);
  convertToCamelCase(userString);
  convertToPascalCase(userString);
  convertToSnakeCase(userString);
  convertToKebabCase(userString);
  convertToTrim(userString);
});

function convertToLowerCase(str) {
  const $tragetOutput = document.querySelector("#lower-case");
  let convertedLowerCaseString = "";
  for (const char of str) {
    convertedLowerCaseString += char.toLowerCase();
  }
  $tragetOutput.textContent = convertedLowerCaseString;
}

function convertToUpperCase(str) {
  const $tragetOutput = document.querySelector("#upper-case");
  let convertedUpperCaseString = "";
  for (const char of str) {
    convertedUpperCaseString += char.toUpperCase();
  }
  $tragetOutput.textContent = convertedUpperCaseString;
}

function convertToCamelCase(str) {
  const $tragetOutput = document.querySelector("#camel-case");
  let convertedCamelCaseString = "";
  str.split("").forEach((v, i) => {
    if (v === " ") return;
    if (str[i - 1] === " ") convertedCamelCaseString += str[i].toUpperCase();
    else convertedCamelCaseString += v.toLowerCase();
  });
  $tragetOutput.textContent = convertedCamelCaseString;
}

function convertToPascalCase(str) {
  const $tragetOutput = document.querySelector("#pascal-case");
  let convertedPascalCaseString = "";
  str.split(" ").forEach((v, i) => {
    convertedPascalCaseString +=
      v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase();
  });
  $tragetOutput.textContent = convertedPascalCaseString;
}

function convertToSnakeCase(str) {
  const $tragetOutput = document.querySelector("#snake-case");
  let convertedSnakeCaseString = str.split(" ").join("_");
  $tragetOutput.textContent = convertedSnakeCaseString;
}
function convertToKebabCase(str) {
  const $tragetOutput = document.querySelector("#kebab-case");
  let convertedKebabCaseString = str.split(" ").join("-");
  $tragetOutput.textContent = convertedKebabCaseString;
}

function convertToTrim(str) {
  const $tragetOutput = document.querySelector("#trim");
  let convertedTrimString = str.replaceAll(" ", "");
  $tragetOutput.textContent = convertedTrimString;
}
