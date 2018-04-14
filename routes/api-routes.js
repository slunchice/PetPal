// importing `models` folder in order to use Sequelize models for Owner and Pet tables
var db = require("../models")

module.exports = function (app) {

  // Route for posting new owner to database
  app.post("/api/owner", function (req, res) {
    console.log(req);

    db.Owner.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      photo: req.body.photo,
      age: req.body.age,
      gender: req.body.gender,
      location: req.body.location
    }).then(function (dbOwner) {
      res.json(dbOwner);
    });
  });

  // Route for getting existing owner from database
  app.get("/api/owner", function (req, res) {
    db.Owner.findAll({}).then(function (results) {
      res.json(results);
      // console.log(results);
    });
  });


    // Route for posting new pet to database
    app.post("/api/pet", function (req, res) {
      console.log(req);


      db.Pet.create({
        name: req.body.name,
        age: req.body.scores[1],
        gender: req.body.scores[2],
        size: req.body.scores[3],
        breed: req.body.scores[4],
        bio: req.body.scores[5]
      }).then(function (dbPet) {
        res.json(dbPet);
      });
    });

  // Route for getting existing pet from database
  app.get("/api/pet", function (req, res) {
    console.log(res);
  });

  app.get("/api/events", function(req, respond) {
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
  
    const events = [];
  
    https.get(url + token + query, res => {

      res.setEncoding("utf8");
      
      let body = "";

      res.on("data", data => {
        body += data;
      });

      res.on("end", () => {
        body = JSON.parse(body);
        for (let i = 0; i < 3; i++) {
          events.push(body.events[i]);
        }
        console.log(events);
        respond.json(events);
      });


    });


  });

}