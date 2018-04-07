module.exports = function(sequelize, DataTypes) {
    var Owner = sequelize.define("Owner", {
        
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1, 255]
          }
      },
      age: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [1, 255]
          }
          
      },
      gender: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1, 255]
          }
          
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