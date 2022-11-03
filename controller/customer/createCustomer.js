const Customer = require('../../Model/Customer');

module.exports = async (req, res) => {
  const { name, role } = req.body;
  const createdCustomer = new Customer({
    name,
    role
  });
  await createdCustomer.save();
  const data = {name, role };
  return res.send({
    data,
  });
};
