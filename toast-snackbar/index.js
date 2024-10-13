const $form = document.querySelector("#form");
const $durationInput = $form["duration"];
const $output = document.querySelector('output[for="duration"]');

$durationInput.addEventListener(
  "input",
  (e) => ($output.textContent = e.target.value + "s")
);

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const [horizontalPosition, verticalPosition] = [...e.target["position"]].map(
    (radioNode) => radioNode.value
  );
  const type = e.target["type"].value;
  const message = e.target["message"].value;
  const duration = e.target["duration"].value;

  createToast(horizontalPosition, verticalPosition, type, message, duration);
});

function createToast(
  horizontalPosition,
  verticalPosition,
  type,
  message,
  duration
) {
  const $toastTemplate = document.querySelector(".toast-template");
  const clone = document.importNode($toastTemplate.content, true);
  const $toast = clone.querySelector(".toast");
  $toast.querySelector(".toast-message").textContent = message;
  $toast.classList.add(type);
  $toast
    .querySelector(".remove")
    .addEventListener("click", (e) => removeToast($toast));
  appendToast($toast, horizontalPosition, verticalPosition, duration);
}

function appendToast(toast, horizontalPosition, verticalPosition, duration) {
  let parentNode;
  if (verticalPosition === "top") {
    if (horizontalPosition === "left")
      parentNode = document.querySelector(".position-top-left");
    else parentNode = document.querySelector(".position-top-right");
  }

  if (verticalPosition === "bottom") {
    if (horizontalPosition === "left")
      parentNode = document.querySelector(".position-bottom-left");
    else parentNode = document.querySelector(".position-bottom-right");
  }
  parentNode.appendChild(toast);
  setTimeout(() => {
    removeToast(toast);
  }, duration * 1000);
}

function removeToast(currentToast) {
  currentToast.parentNode.removeChild(currentToast);
}
