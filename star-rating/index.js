const $starContainer = document.querySelector(".star-container");
const $stars = document.querySelectorAll(".star");
const $output = document.querySelector("#smileyContainer output");

const RATING_DATA = [
  { emoji: "😢" },
  { emoji: "🙁" },
  { emoji: "😐" },
  { emoji: "🙂" },
  { emoji: "😀" },
];

$starContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("star")) {
    const mouseoverIndex = e.target.dataset.index - 1;
    $stars.forEach(($star, index) => {
      if (index <= mouseoverIndex) {
        $star.classList.add("star-filled");
        $star.classList.remove("star-empty");
      } else {
        $star.classList.add("star-empty");
        $star.classList.remove("star-filled");
      }
    });
  }
});

$starContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("star")) {
    $output.textContent = RATING_DATA[e.target.dataset.index - 1].emoji;
  }
});
