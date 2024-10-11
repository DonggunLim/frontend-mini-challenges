const $modal = document.querySelector("#modal");

$modal.addEventListener("click", (e) => {
  if (
    [$modal, ...document.querySelectorAll(".modal-bottom button")].includes(
      e.target
    )
  ) {
    $modal.classList.add("hidden");
    openModal();
  }
});

const openModal = () =>
  setTimeout(() => $modal.classList.remove("hidden"), 1000);
