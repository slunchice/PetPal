// importing `models` folder in order to use Sequelize models for Owner and Pet tables
var db = require("../models")

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

}