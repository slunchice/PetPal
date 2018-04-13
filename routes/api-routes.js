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
    res.json();
  });

  app.get("/api/events", function(req, res) {
    console.log(res);
    res.json();
  });

}