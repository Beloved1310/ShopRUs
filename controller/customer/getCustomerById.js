const Customer = require('../../Model/Customer');

module.exports = async (req, res) => {
  const data = await Customer.findById(req.params.id);

  return res.send({ message: 'Customer', data });
};