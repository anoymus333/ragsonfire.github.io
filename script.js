const cards = document.querySelectorAll(".tilt");

cards.forEach(function (card) {

  card.addEventListener("mousemove", function (event) {
    const box = card.getBoundingClientRect();

    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;

    card.style.transform =
      "perspective(900px) rotateY(" + x * 8 + "deg) rotateX(" + -y * 8 + "deg)";
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  });

});
