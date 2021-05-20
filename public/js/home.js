let card = document.querySelector(".card");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
card.addEventListener("click", click);
card2.addEventListener("click", clickb);
card3.addEventListener("click", clickc);

function click(event) {
  let elem = event.currentTarget;
  if (elem.style.transform == "rotateY(180deg)") {
    elem.style.transform = "rotateY(0deg)";
  } else {
    elem.style.transform = "rotateY(180deg)";
  }
}

function clickb(event) {
  let elem = event.currentTarget;
  if (elem.style.transform == "rotateY(180deg)") {
    elem.style.transform = "rotateY(0deg)";
  } else {
    elem.style.transform = "rotateY(180deg)";
  }
}

function clickc(event) {
  let elem = event.currentTarget;
  if (elem.style.transform == "rotateY(180deg)") {
    elem.style.transform = "rotateY(0deg)";
  } else {
    elem.style.transform = "rotateY(180deg)";
  }
}
