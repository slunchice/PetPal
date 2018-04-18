// importing `models` folder in order to use Sequelize models for Owner and Pet tables
var db = require("../models")
var keys = require("../keys.js");

var EventBriteAPI = require("node-eventbrite");
var eventBrite = new EventBriteAPI(keys.eventBrite);

module.exports = function (app) {

  // Route for posting new owner to database
  app.post("/api/owner", function (req, res) {

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

    });

  });


    // Route for posting new pet to database
    app.post("/api/pet", function (req, res) {

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

    console.log(req);

  });

  // Route for getting EventBrite API data
  app.get("/api/events", function(req, respond) {
  
    const events = [];

    eventBrite.search({q:"dogs", location:{address: "charlotte"}}, (err, res) => {
      
      for (let i = 0; i < 3; i++) {

        events.push(res.events[i]);

      }

      respond.json(events);

    });

  });

}