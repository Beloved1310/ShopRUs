// Trade discount,
// Quantity discount, and
// Cash discount.

const Discount = require("../../models/Discount");

module.exports = async (req, res) => {
  const { discountType } = req.body;
  const createdDiscount = new Discount({
    discountType,
  });
  await createdDiscount.save();
  const data = { discountType };
  return res.send({
    data,
  });
};
