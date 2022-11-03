const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/Sequelize')

class Customer extends Model{

}

Customer.init({
    
    name:{
        type: DataTypes.STRING,
        allowNull: false

    },
    role:{
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Customer'
})

module.exports = Customer