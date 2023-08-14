const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", checkcards);

checkcards();

function checkcards() {
  const trigerBottom = (window.innerHeight / 5) * 4;

  cards.forEach((card) => {
    const boxTop = card.getBoundingClientRect().top;

    if (boxTop < trigerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}
