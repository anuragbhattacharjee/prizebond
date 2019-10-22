const express = require('express');
const router = express.Router();
const services = require('../services/index');


/* GET home page. */
router.get('/', services.home);
router.get('/myprizebonds', services.prizebonds);

module.exports = router;
