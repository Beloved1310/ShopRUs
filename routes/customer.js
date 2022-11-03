const express = require("express");
const asyncMiddleware = require("../middleware/async");

const router = express.Router();

const createCustomer = require("../controller/customer/createCustomer");
const getAllCustomers = require("../controller/customer/getAllCustomers");
const getCustomerByName = require("../controller/customer/getCustomerByName");
const getCustomerById = require("../controller/customer/getCustomerById");

router.get("/getCustomerByName/:name", asyncMiddleware(getCustomerByName));
router.get("/getAllCustomers", asyncMiddleware(getAllCustomers));
router.get("/getCustomerById/:id", asyncMiddleware(getCustomerById));

router.post("/createCustomer", asyncMiddleware(createCustomer));

module.exports = router;
