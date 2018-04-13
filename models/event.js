module.exports = function(sequelize, DataTypes) {

  // Model for EventBrite API events
  var Event = sequelize.define("Event", {

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

}