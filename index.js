//set up server here

const express = require("express");
const app = express(); //The app object contains several functions for routing requests, based on HTTP methods

const hostname = "127.0.0.1";
const port = 3000;

app.use(express.static(__dirname + "/frontend"))

//load the app
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index");
});

//get user input from search bar
app.post("/search", (res, req) => {
    console.log(req.body);
    
  res.send("post");
});

app.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});
