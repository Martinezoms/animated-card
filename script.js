// For movement animation to happen
const container = document.querySelector(".container");
const card = document.querySelector(".card");

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const desc = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// Moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container.addEventListener("mouseenter", () => {
  card.style.transition = "none";

  // Popout effect
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  desc.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(125px)";
  purchase.style.transform = "translateZ(125px)";
});

// Animate  out
container.addEventListener("mouseleave", () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  card.style.transition = "all 0.5s ease";

  // Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  desc.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
