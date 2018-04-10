// importing `models` folder in order to use Sequelize models for Owner and Pet tables
var db = require("../models")

module.exports = function(app) {

 

    app.post("/api/owner", function(req, res) {
        console.log(req.body);
     
        db.Owner.create({
          name: req.body.name,
          age: req.body.age,
          gender: req.body.gender,
          location: req.body.location
        }).then(function(dbOwner) {
          
          res.json(dbOwner);
        });
      });

}

