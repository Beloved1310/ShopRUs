const express = require("express");

const asyncMiddleware = require("../middleware/async");

const router = express.Router();

const addDiscount = require("../controller/discount/addDiscount");
const getAllDiscounts = require("../controller/discount/getAllDiscounts");
const getDiscountPercentage = require("../controller/discount/getDiscountPercentage");

router.get(
  "/getDiscountPercentage/:discountType",
  asyncMiddleware(getDiscountPercentage)
);
router.get("/getAllDiscounts", asyncMiddleware(getAllDiscounts));

router.post("/addDiscount", asyncMiddleware(addDiscount));

module.exports = router;
