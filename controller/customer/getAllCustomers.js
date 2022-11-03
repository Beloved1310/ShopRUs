const Customers = require('../../Model/Customer');

module.exports = async (req, res) => {
  const data = await Customers.findAll();
  return res.send({ message: 'Customers', data });
};