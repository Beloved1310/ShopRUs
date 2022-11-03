const Customer = require('../../Model/Customer');

module.exports = async (req, res) => {
  const { name, role } = req.body;
  const createdCustomer = new Customer({
    name,
    role
  });

  //   const user = await User.findOne({ email });
  //   if (user) return res.status(400).send({ error: 'User already registered' });
  //   const salt = await bcrypt.genSalt(10);
  //   createdUser.password = await bcrypt.hash(createdUser.password, salt);
  await createdCustomer.save();
  const data = {name, role };
  return res.send({
    data,
  });
};
