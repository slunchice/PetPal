module.exports = function(sequelize, DataTypes) {
    // creating table of owners
    var Owner = sequelize.define("Owner", {
        // table columns for name, age, gender, and location
      name: {
          type: DataTypes.STRING,
          allowNull: false,
        // validating length of input, no external url links, and no special characters except - or '
          validate: {
            len: [1, 255],
            isUrl: false,
            is: ["^[a-z-']+$",'i']
          }
      },
      age: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [1, 3],
            isUrl: false,
            // input must be an integer
            isInt: true
          }
          
      },
      gender: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isUrl: false,
            len: [1, 255],
            // no special characters allowed
            is: ["^[a-z]+$",'i']
          }
          
      },

      location: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            // input must be lowercase in order to work with the 'equals: 'yes'' validation below
            isLowercase: true,
            // validating that user answered 'yes' to the client-side question 'Do you live in the Charlotte area?'
             equals: 'yes',
          }
      }

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