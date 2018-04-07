module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet",  {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255],
                isUrl: false,
                is: ["^[a-z-']+$",'i']
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
        size: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: false,
                len: [1, 255],
                // no special characters allowed
                is: ["^[a-z]+$",'i']
              }
              
            
            
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true,
            isUrl: false,
              
            
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: false,
                len: [1, 255],
                // no special characters allowed
                is: ["^[a-z]+$",'i']
              }
        }
    });

    // Associating pets to Owner table
    Pet.associate = function(models) {
        Pet.belongsTo(models.Owner, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Pet;
}


// validating inputs
