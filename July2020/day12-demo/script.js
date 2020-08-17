"use strict";

let contacts = [
  {
    name: "Joe",
    phone: "248-248-2498",
    relation: "friend",
  },
  {
    name: "Jane",
    phone: "248-248-444",
    relation: "friend",
  },
  {
    name: "Jill",
    phone: "248-248-5555",
    relation: "friend",
  },
];

let contactContainer = document.querySelector(".contacts");

const display = () => {
  contactContainer.innerHTML = "";
  contacts.forEach((contact, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let nameParagraph = document.createElement("p");
    nameParagraph.innerText = contact.name;
    let phoneParagraph = document.createElement("p");
    phoneParagraph.innerText = contact.phone;
    let relationParagraph = document.createElement("p");
    relationParagraph.innerText = contact.relation;
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add("delete");
    deleteButton.getAttribute("data-id", index);
    card.append(nameParagraph, phoneParagraph, relationParagraph, deleteButton);
    contactContainer.append(card);
  });
};
display();

let form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  let newName = data.get("name");
  let newPhone = data.get("phone");
  let newRelation = data.get("relation");
  let newContact = {
    name: newName,
    phone: newPhone,
    relation: newRelation,
  };
  contacts.push(newContact);
  console.log(contacts);
  formContainer.classList.add("hide");
  form.reset();
  display();
});

contactContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let index = e.target.getAttribute("data-id");
    contacts.splice(index, 1);
    display();
  }
});

let show = document.querySelector(".show");
let formContainer = document.querySelector(".form-container");
show.addEventListener("click", () => {
  formContainer.classList.remove("hide");
});
