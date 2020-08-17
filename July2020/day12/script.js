"use strict";

// Not preferred (1)
// not scalable
// tedious
// repetitive

// targeting each link (work,about,contact, pricing, and hire) individually

// let work = document.querySelector(".work");

// work.addEventListener("click", () => {
//   work.classList.toggle("large");
// });

// let about = document.querySelector(".about");

// about.addEventListener("click", () => {
//   about.classList.toggle("large");
// });

// let contact = document.querySelector(".contact");

// contact.addEventListener("click", () => {
//   contact.classList.toggle("large");
// });

// let pricing = document.querySelector(".pricing");

// pricing.addEventListener("click", () => {
//   pricing.classList.toggle("large");
// });

// let hire = document.querySelector(".hire");

// hire.addEventListener("click", () => {
//   hire.classList.toggle("large");
// });

// targeting each link (work,about,contact, pricing, and hire) at once

// let anchors = document.querySelectorAll(".link");

// anchors.forEach((anchor) => {
//   anchor.addEventListener("click", () => {
//     anchor.classList.toggle("large");
//   });
// });

// preferred method is Event Delegation
// Event Delegation utilizies bubbling to attach an event listener to only one common parent.

let list = document.querySelector(".list");

list.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.localName === "a") {
    e.target.classList.toggle("large");
    e.stopPropagation();
  } else if (e.target.localName === "button") {
    e.target.style.backgroundColor = "green";
  }
});

let header = document.querySelector(".header");

header.addEventListener("click", () => {
  console.log("The header heard a click");
});

let input = document.querySelector(".test");

input.addEventListener("focus", () => {
  console.log("Heard a focus");
});

let noBubble = document.querySelector(".no-bubble");

noBubble.addEventListener("focus", () => {
  console.log("The section heard the focus");
});

let boxes = document.querySelector(".boxes");

let clickTotal = document.querySelector(".clicks");

let click = 0;

boxes.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.classList.contains("box")) {
    click++;
    clickTotal.innerText = click;
  }
});
