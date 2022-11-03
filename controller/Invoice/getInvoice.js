const Customers = require("../../Model/Customer");
const Discount = require("../../Model/Discount");
const Invoice = require("../../Model/Invoice");
const db = [
  {
    id: 1,
    products: "yam",
    customerId: {
      id: 1,
      name: "piggy",
      role: "afflilate",
      createdAt: "2022-11-02T17:22:02.032Z",
      updatedAt: "2022-11-02T17:22:02.032Z",
    },
    createdAt: "2022-11-02T17:22:02.032Z",
    updatedAt: "2022-11-02T17:22:02.032Z",
  },
  {
    id: 2,
    products: "cassava",
    customerId: {
      id: 2,
      name: "fiigy",
      role: "employee",
      createdAt: "2022-11-02T17:22:02.032Z",
      updatedAt: "2022-11-02T17:22:02.032Z",
    },
    createdAt: "2022-11-02T17:26:25.359Z",
    updatedAt: "2022-11-02T17:26:25.359Z",
  },
];
// Discount % = (Discount/List Price) × 100.
// console.log(Cusomers.role)
module.exports = async (req, res) => {
  const { bill } = req.params;
  let discount, data;

  for (let val of db) {
    console.log(val, "hhhh");

    if (val["customerId"]["role"] === "afflilate") {
      console.log(val["customerId"]["role"], "bbbbbbbbbbbbb");
      const discountValue = await Discount.findOne({
        where: { discountType: val["customerId"]["role"] },
      });
      console.log(discountValue["discountPercentage"], "xxx");
      discount = (discountValue["discountPercentage"] / bill) * 100;
      data = discount;
      return res.send({ message: "Customers", data });
    }

    if (val["customerId"]["role"] === "employee") {
      console.log(val["customerId"]["role"], "bbbbbbbbbbbbb");
      const discountValue = await Discount.findOne({
        where: { discountType: val["customerId"]["role"] },
      });
      console.log(discountValue["discountPercentage"], "xxx");
      discount = (discountValue["discountPercentage"] / bill) * 100;
      return res.send({ message: "Customers", data });
    }
  }
};
