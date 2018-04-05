module.exports = function(sequelize, DataTypes) {
    var Owner = sequelize.define("Owner", {
      // Giving the Owner model a name of type STRING
      name: {
          type: DataTypes.STRING
      },
      age: {
          type: DataTypes.INTEGER
      },
      gender: {
          type: DataTypes.STRING
      },

    });
  
    return Owner;
  };