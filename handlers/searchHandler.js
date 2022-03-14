//handle the request for search
//populate array with articles, search function, return response

const res = require("express/lib/response");
const articles = require("../assets/articles.json");

const search = (inputString) => {
  console.log("handler: " + inputString);

  //Remove Null values and not of type string
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

  console.log(list.length);

  function searchByValue(list, inputString) {
    return list.filter((article) =>
      Object.keys(article).some((k) =>
        article[k].toString().toLowerCase().includes(inputString.toLowerCase())
      )
    );
  }

  return searchByValue(list, inputString);

  /*articles.forEach(article => {
        console.log(article);
    })*/
};

module.exports = {
  search: search,
};
