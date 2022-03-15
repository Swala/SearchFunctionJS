const submitSearch = document.getElementById("searchInput");
const results = document.getElementById("results");
let userInput = "";

submitSearch.addEventListener("keyup", (e) => {
  userInput = e.target.value;
  //console.log(userInput);
  getResults(userInput);
});

const getResults = async (userInput) => {
  //results.innerHTML = userInput;
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
  //results.innerHTML = res;
};

const createResultsList = (res) => {
  //console.log(res);
  res.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("listItem");
    const title = document.createTextNode(element.title);
    li.appendChild(title);
    //li.innerHTML = `<i class="listItem">${element.title}<i>`;
    results.appendChild(li);
  });
};

document.addEventListener("DOMContentLoaded", submitSearch);
