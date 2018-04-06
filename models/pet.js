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
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Pet;
}

// next step: associate Pets table with Owner table