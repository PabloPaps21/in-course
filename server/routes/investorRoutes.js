const express = require('express');
const router = express.Router();
const catchErrors = require('../middlewares/catchErrors');

 const {
  myInvestList
 } = require ('../controllers/investor.controller');

const { isLoggedIn } = require('../middlewares/auth.middlewares');

router.get('/investor', isLoggedIn, catchErrors(myInvestList));

module.exports = router;