"use strict";

// Use querySelector to return a node that represents the first element with a specific css selector.

let firstParagraph = document.querySelector(".pick-me");

console.dir(firstParagraph);
firstParagraph.style.color = "green";

// Use querySelectorAll to return a NodeList of all the elements with a specific css selector.

const unicornParagraphs = document.querySelectorAll(".unicorn");

console.dir(unicornParagraphs);

// use a loop to change the font-size property of every node in the NodeList

unicornParagraphs.forEach((item) => {
  item.style.fontSize = "32px";
});

// Creates an instance of the element for the specified tag
let newDiv = document.createElement("div");

// Add an attribute to an element

newDiv.setAttribute("class", "narwal");

// Add text the div

newDiv.innerText = "Hello from the narwal div";

console.log(newDiv);

let mainContent = document.querySelector(".main-content");

// append the element we made (newDiv) to the existing element (mainContent)
mainContent.append(newDiv);

// attach an event listener to a specific element with an anonymous function

newDiv.addEventListener("click", () => {
  newDiv.style.backgroundColor = "green";
});

// When the paragraph with the class of pick-me is clicked, toggle the class of bolder, which has the property of font-weight: bolder. Use a named function.

const bolder = () => {
  firstParagraph.classList.toggle("strong");
};

firstParagraph.addEventListener("click", bolder);

let someVariableName = document.querySelector(".js");

// add the class name "another" to the .js class
someVariableName.classList.add("another");

// remove the class name "another" from the .js class

someVariableName.classList.remove("another");

// form submission

let signInForm = document.querySelector(".sign-in");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(signInForm);
  let username = data.get("username");
  let password = data.get("password");
  let usernameParagraph = document.querySelector(".username");
  usernameParagraph.innerText = username;
  let passwordParagraph = document.querySelector(".password");
  passwordParagraph.innerText = password;
});

let money = document.querySelector(".money");

let total = 0;

money.addEventListener("click", () => {
  let amount = parseInt(money.getAttribute("data-amount"));
  total += amount;
  let totalParagraph = document.querySelector(".total");
  totalParagraph.innerText = total;
});
