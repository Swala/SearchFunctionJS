//import createCard from "./card.js";
const submitSearch = document.getElementById("searchInput");
const results = document.getElementById("results");

submitSearch.addEventListener("keyup", (e) => {
  e.preventDefault();
  e.target.value === null || e.target.value.length < 3
    ? (results.innerHTML = "")
    : getResults(e.target.value);
});

//fetch results
const getResults = async (userInput) => {
  results.innerHTML = "";

  let res = await fetch("http://localhost:3000/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userInput: userInput,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("Something went wrong: " + error);
    });

  createResultsList(res);
};

//create list elements to display results
const createResultsList = (res) => {
  //console.log(res.length);

  if (res.length > 0) {
    res.forEach((element) => {
      const li = document.createElement("li");
      li.classList.add("listItem");
      const title = document.createTextNode(element.title);
      li.appendChild(title);

      results.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.classList.add("listItem");
    const title = document.createTextNode("No results found");
    li.appendChild(title);
    results.appendChild(li);
  }
};

document.addEventListener("DOMContentLoaded", submitSearch);
