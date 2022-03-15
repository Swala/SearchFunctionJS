//handles res and req
"use strict";

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

//handle post req from search bar
app.post("/search", (req, res) => {
  req.body;
  console.log("from express: " + req.body.userInput);
  const result = searchHandler.search(req.body.userInput);

  res.send(result);
});

app.use((req, res, next) => {
  res.status(404).send("Nothing here!");
});

app.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});
