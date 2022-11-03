const Discount = require("../../Model/Discount");

module.exports = async (req, res) => {
  const { discountType} = req.params;
  const discountValue= await Discount.findOne({ where: {discountType }})
  const data =discountValue['discountPercentage']
  
  return res.send({ message: `Discount Percentage for ${discountType}`, data });
};
