//set up server here

const express = require("express");
const app = express(); //The app object contains several functions for routing requests, based on HTTP methods

const hostname = "127.0.0.1";
const port = 3000;

const searchHandler = require("./handlers/searchHandler");

app.use(express.static(__dirname + "/frontend"));
app.use(express.json());

//load the app
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index");
});

//get user input from search bar
app.post("/search", (req, res) => {
  req.body;
  console.log("from express: " + req.body.userInput);
  //const result = searchHandler.search(req.body.inputString);

  //res.send(result);
  res.send(req.body.userInput);
});

app.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});
