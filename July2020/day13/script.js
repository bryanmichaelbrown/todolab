"use strict";
// ---------------------------
// fetch
// ---------------------------
// The Fetch API allows you to asynchronously request for a resource. Use the fetch() method to return a promise that resolves into a Response object. To get the actual data, you call one of the methods of the Response object e.g., json() . These methods also resolve into the actual data.
// Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
// What are APIs?
// Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.
let form = document.querySelector(".search-form");
const search = (searchKeyword = "popular") => {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=pkoYR3oxF3nRsrrTcEH4NDT5ZHzkfeDy&q=${searchKeyword}`
  )
    // The .then() method returns the Promise object
    // once our request is fulfilled
    .then((response) => {
      // In this case, we are going to use the .json() method
      // which returns the readable JSON object in the body of our request
      return response.json();
    })
    // Once we get our response we move on to the next step
    // to do this, we will "chain" another .then() method
    // inside of which we will handle our successful case
    .then((response) => {
      // *******
      // Inside of here is where we will do all of our logic on the successful response
      // *******
      // console.log(response);
      let gifData = response.data;
      console.log(gifData);
      let cardContainer = document.querySelector(".container");
      cardContainer.innerHTML = "";
      gifData.forEach((gif) => {
        let card = document.createElement("div");
        let newH2Element = document.createElement("h2");
        let newImageElement = document.createElement("img");
        console.log(gif.images.preview_gif.url);
        newImageElement.setAttribute("src", gif.images.preview_gif.url);
        if (gif.title.trim() === "") {
          newH2Element.innerText = "TRASH CATS";
        } else {
          newH2Element.innerText = gif.title;
        }
        card.append(newH2Element, newImageElement);
        cardContainer.append(card);
      });
    })
    // incase there is a problem, we need to "catch" the error
    .catch((error) => {
      // .catch() is similar to .then() in that it returns are Promise object
      // in this case we are simply going to log our error in the JavaScript console in the browser
      console.log(error);
    });
};
search();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  let searchTerm = data.get("search");
  search(searchTerm);
});
console.log("hi");
