const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/Sequelize");

class Discount extends Model {}

Discount.init(
  {
    discountType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discountPercentage: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Discount",
  }
);

module.exports = Discount;
