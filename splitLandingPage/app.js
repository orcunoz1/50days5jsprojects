const left = document.querySelector(".left");
const right = document.querySelector(".right");
const contanier = document.querySelector(".container");

left.addEventListener("mouseenter", () =>
  contanier.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  contanier.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  contanier.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  contanier.classList.remove("hover-right")
);
