const express = require('express');


const router = express.Router();

const addDiscount = require('../controller/user/createDiscount');
const getAllDiscounts = require('../controller/user/getAllDiscounts');
const getDiscountPercentage = require('../controller/user/getDiscountByName');

router.get('/getDiscountPercentage', asyncMiddleware(getDiscountPercentage));
router.get('/getAllDiscounts', asyncMiddleware(getAllDiscounts));

router.post('/createDiscount', asyncMiddleware(addDiscount));



module.exports = router;