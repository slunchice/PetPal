module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet",  {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: true
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
