const Customers = require('../../Model/Customer');

module.exports = async (req, res) => {
  const data = await Customers.find();
  return res.send({ message: 'Customers', data });
};