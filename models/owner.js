module.exports = function(sequelize, DataTypes) {
    var Owner = sequelize.define("Owner", {
        
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