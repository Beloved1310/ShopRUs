const Discounts = require('../../Model/Discount');

module.exports = async (req, res) => {
  const data = await Discounts.findAll();
  return res.send({ message: 'Discounts', data });
};