// importing `models` folder in order to use Sequelize models for Owner and Pet tables
var db = require("../models")
var event = require("../controllers/eventBriteController")

module.exports = function(app) {


  app.post("/api/owner", function(req, res) {
    console.log(req);
 
    db.Owner.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      photo: req.body.photo,
      age: req.body.age,
      gender: req.body.gender,
      location: req.body.location
    }).then(function(dbOwner) {
      res.json(dbOwner);
    });
  });

  app.post("/api/pet", function(req, res) {
    console.log(req);

    db.Pet.create({
      name: req.body.name,
      age: req.body.scores[1],
      gender: req.body.scores[2],
      size: req.body.scores[3],
      breed: req.body.scores[4],
      bio: req.body.scores[5]
    }).then(function(dbPet) {
      res.json(dbPet);
    });
  });

  app.post("/api/events", function(req, res) {
    console.log(req);
    res.send(req);
  });

  app.get("/api/events", function(req, res) {
    const https = require("https");
    https.post = require("http-post");
  
    const express = require("express");
    const app = express();
  
    const url =
      "https://www.eventbriteapi.com/v3/events/search/?token=";
  
    const token =
      "B67FCSUCKZGEB7QG7FI2";
  
    const query =
      "&q=dogs&location.address=charlotte";
  
    var events = [];
  
    https.get(url + token + query, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        body = JSON.parse(body);
        // console.log(body.events[0]);
        for (let i = 0; i < 3; i++) {
          events.push(body.events[i]);
          
        }
        console.log(events);
        res(events);
      });
    });

    
    

  });

}