//handle the request for search
//populate array with articles, search function, return response

const res = require("express/lib/response");
const articles = require("../assets/articles.json");

//Remove Null values and not of type string
//not working as I want to yet
let list = articles.filter((article) => {
  for (let value in article) {
    //console.log(value) //properties
    if (typeof article[value] !== "string" && article[value] === null) {
      //need to remove property containing null or not string
      return false;
    }
  }
  return true;
});

const search = (inputString) => {
  console.log("Input: " + inputString);

  function searchByValue(list, inputString) {
    return list.filter((article) =>
      Object.keys(article).some((k) =>
        article[k].toString().toLowerCase().includes(inputString.toLowerCase())
      )
    );
  }

  return searchByValue(list, inputString);
};

module.exports = {
  search: search,
};
