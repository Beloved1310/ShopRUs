const Discount = require('../../Model/Discount');

module.exports = async (req, res) => {
  const { discountType, discountPercentage } = req.body;
 await Discount.create({
    discountType,
    discountPercentage
  });
 
  const data = { discountType, discountPercentage };
  return res.send({
    data,
  });
};
