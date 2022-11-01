const express = require('express');


const router = express.Router();

const createCustomer = require('../controller/user/createCustomer');
const getAllCustomers = require('../controller/user/getAllCustomers');
const getCustomerByName = require('../controller/user/getCustomerByName');
const getCustomerById = require('../controller/user/getCustomerById');


router.get('/getCustomerByName', asyncMiddleware(getCustomerByName));
router.get('/getAllCustomers', asyncMiddleware(getAllCustomers));
router.get('/getCustomerById', asyncMiddleware(getCustomerById));

router.post('/createCustomer', asyncMiddleware(createCustomer));



module.exports = router;