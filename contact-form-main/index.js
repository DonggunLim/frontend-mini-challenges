const $form = document.querySelector("form");
const $FirstNameInput = document.querySelector("#first-name");
const $LastNameInput = document.querySelector("#last-name");
const $EmailAdressInput = document.querySelector("#email-address");
const $GeneralInput = document.querySelector("#general-enquiry");
const $SupportInput = document.querySelector("#support-request");
const $MessageTextArea = document.querySelector("#message");
const $AgreeRadio = document.querySelector("#agree-radio");
const $toast = document.querySelector("#toast");

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isValid = validateForm();

  if (isValid) {
    $toast.style.visibility = "visible";

    setTimeout(() => {
      $toast.style.visibility = "hidden";
    }, 3000);

    $form.reset();
  }
});

const validateForm = () => {
  let isValid = true;
  if (!$FirstNameInput.value.length) {
    $FirstNameInput.classList //
      .add("required");
    $FirstNameInput
      .closest(".input-container")
      .querySelector(".error").style.visibility = "visible";
    isValid = false;
  } else {
    $FirstNameInput.classList //
      .remove("required");
    $FirstNameInput
      .closest(".input-container")
      .querySelector(".error").style.visibility = "hidden";
    isValid = true;
  }
  if (!$LastNameInput.value.length) {
    $LastNameInput.classList //
      .add("required");
    $LastNameInput
      .closest(".input-container")
      .querySelector(".error").style.visibility = "visible";
    isValid = false;
  } else {
    $LastNameInput.classList //
      .remove("required");
    $LastNameInput
      .closest(".input-container")
      .querySelector(".error").style.visibility = "hidden";
    isValid = true;
  }
  if (!$EmailAdressInput.value.length) {
    $EmailAdressInput.classList //
      .add("required");
    $EmailAdressInput
      .closest(".input-container")
      .querySelector(".error").style.visibility = "visible";
    isValid = false;
  } else {
    $EmailAdressInput.classList //
      .remove("required");
    $EmailAdressInput
      .closest(".input-container")
      .querySelector(".error").style.visibility = "hidden";
    isValid = true;
  }
  if (!$GeneralInput.checked && !$SupportInput.checked) {
    $GeneralInput.classList //
      .add("required");
    $GeneralInput
      .closest(".input-container")
      .querySelector(".error").style.visibility = "visible";
    isValid = false;
  } else {
    $GeneralInput.classList //
      .remove("required");
    $GeneralInput
      .closest(".input-container")
      .querySelector(".error").style.visibility = "hidden";
    isValid = true;
  }

  if (!$MessageTextArea.value.length) {
    $MessageTextArea.classList //
      .add("required");
    $MessageTextArea
      .closest(".input-container")
      .querySelector(".error").style.visibility = "visible";
    isValid = false;
  } else {
    $MessageTextArea.classList //
      .remove("required");
    $MessageTextArea
      .closest(".input-container")
      .querySelector(".error").style.visibility = "hidden";
    isValid = true;
  }
  if (!$AgreeRadio.checked) {
    $AgreeRadio.classList //
      .add("required");
    $AgreeRadio
      .closest(".input-container")
      .querySelector(".error").style.visibility = "visible";
    isValid = false;
  } else {
    $AgreeRadio.classList //
      .remove("required");
    $AgreeRadio
      .closest(".input-container")
      .querySelector(".error").style.visibility = "hidden";
    isValid = true;
  }

  return isValid;
};

const validateInpute = ($input) => {
  if (!$input.checked) {
    $input.classList //
      .add("required");
    $input
      .closest(".input-container")
      .querySelector(".error").style.visibility = "visible";
    return false;
  } else {
    $input.classList //
      .remove("required");
    $input
      .closest(".input-container")
      .querySelector(".error").style.visibility = "hidden";
    return true;
  }
};
