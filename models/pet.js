module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet",  {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            isUrl: false,
              
            
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            isUrl: false,
              
            
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            isUrl: false,
              
            
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
            isUrl: false,
              
            
            
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true,
            isUrl: false,
              
            
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: true,
            isUrl: false,
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
