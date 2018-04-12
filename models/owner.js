module.exports = function(sequelize, DataTypes) {
    // creating table of owners
    var Owner = sequelize.define("Owner", {
        // table columns for name, age, gender, and location
      first_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false
      },

      age: {
          type: DataTypes.INTEGER,
          allowNull: false       
      },
      gender: {
          type: DataTypes.STRING,
          allowNull: false
      },

      location: {
          type: DataTypes.STRING,
          allowNull: false
      }

    });

    Owner.associate = function(models) {
      // Associating owners with Pet table
      // When an owner is deleted, this will delete all their associated pets
      Owner.hasMany(models.Pet, {
        onDelete: "cascade"
      });
    };

  
    return Owner;
    
  };