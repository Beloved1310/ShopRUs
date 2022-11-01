const Discount = require("../../Model/Discount");

module.exports = async (req, res) => {
  let data;
  const discountResult = await Discount.findOne(discountType);

  if (discountResult["discountType"] === "Trade-discount") {
    // data =
  } else if (discountResult["discountType"] === "Quantity-discount") {
  } else if (discountResult["discountType"] === "Cash-discount") {
  } else {
    data = "";
  }

  return res.send({ message: "Discount", data });
};
