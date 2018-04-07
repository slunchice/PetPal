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

    Owner.associate = function(models) {
        // Associating owners with Pet table
        // When an Owner is deleted, this will delete all associated pets
        Owner.hasMany(models.Pet, {
          onDelete: "cascade"
        });
      };
  
    return Owner;
  };