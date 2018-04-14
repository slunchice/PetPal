// importing `models` folder in order to use Sequelize models for Owner and Pet tables
var db = require("../models")

module.exports = function(app) {

  // Route for posting new owner to database
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

  // Route for getting existing owner from database
  app.get("/api/owner", function(req, res) {
    console.log(res);
  });

  // Route for posting new pet to database
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

  // Route for getting existing pet from database
  app.get("/api/pet", function(req, res) {
    console.log(res);
  });

  // Route for posting new EventBrite API events to database
  app.post("/api/events", function(req, res) {
    // Send events to database via Sequelize
    db.Event.create({
      name: req.body.name,
      description: req.body.description,
      logo: req.body.logo,
      link: req.body.link
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Route for getting existing EventBrite API events from database
  app.get("/api/events", function(req, res) {
    // Get events from database via Sequelize
  });

  // Route for posting new Flickr API photos to database
  app.post("/api/photos", function(req, res) {
    // Send photos to database via Sequelize
  });

  // Route for getting existing Flickr API photos from database
  app.get("/api/photos", function(req, res) {
    // Get photos from database via Sequelize
  });

}