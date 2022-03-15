const submitSearch = document.getElementById("searchInput");
const results = document.getElementById("results");
let userInput = "";

submitSearch.addEventListener("keyup", (e) => {
  userInput = e.target.value;
  getResults(userInput);
});

//fetch results
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
};

//create elements to display results
const createResultsList = (res) => {
  console.log(res);

  const li = document.createElement("li");
  li.classList.add("listItem");

  if (res.length > 0) {
    res.forEach((element) => {
      const title = document.createTextNode(element.title);
      li.appendChild(title);
    });
  } else {
    const title = document.createTextNode("No results found");
    li.appendChild(title);
  }
  results.appendChild(li);
};

document.addEventListener("DOMContentLoaded", submitSearch);
