const express = require('express');

const asyncMiddleware = require('../middleware/async');

const router = express.Router();

const getInvoice = require('../controller/Invoice/getInvoice');


router.get('/getinvoice/:bill', asyncMiddleware(getInvoice));




module.exports = router;