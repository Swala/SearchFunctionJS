//handle the request for search

const res = require("express/lib/response");
const articles = require("../assets/articles.json");

//Remove or skip Null values
//not working, it removes the whole object when it finds null
/*
let list = articles.filter((article) => {
  for (let key in article) {
    //console.log(key); //properties
    if (article[key] === null) {
      //console.log(article[key]);
      //delete key;
      return false;
      //continue;
    }
  }
  return true;
});*/

//from stackOverflow...Returns a new object from an iterable of [key, value] pairs.
let listWithoutNull = articles.map((obj) =>
  Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== null))
);

const search = (inputString) => {
  //console.log(listWithoutNull.length);

  function searchByValue(listWithoutNull, inputString) {
    return listWithoutNull.filter((article) =>
      Object.keys(article).some((k) =>
        article[k].toString().toLowerCase().includes(inputString.toLowerCase())
      )
    );
  }
  return searchByValue(listWithoutNull, inputString);
};

module.exports = {
  search: search,
};
