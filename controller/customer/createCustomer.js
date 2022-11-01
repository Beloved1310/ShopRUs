const Customer = require('../../models/Customer');

module.exports = async (req, res) => {
  const { fullname, email, password, isVendor, location, business } = req.body;
  const createdCustomer = new Customer({
    fullname,
    email,
    password,
    gender,
  });

  //   const user = await User.findOne({ email });
  //   if (user) return res.status(400).send({ error: 'User already registered' });
  //   const salt = await bcrypt.genSalt(10);
  //   createdUser.password = await bcrypt.hash(createdUser.password, salt);
  await createdCustomer.save();
  const data = { fullname, email, password, gender };
  return res.send({
    data,
  });
};
