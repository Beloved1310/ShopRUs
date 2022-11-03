const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/Sequelize");

class Invoice extends Model {
  static associate(models) {
    // define association here
    this.customerId = this.belongsTo(models.Customer, {
      foreignKey: "customer_id",
    });
  }
}

Invoice.init(
  {
    products: [
      {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
      },
    ],
    customerId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Customer",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Invoice",
  }
);

module.exports = Invoice;
