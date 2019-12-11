const express = require('express');
const router = express.Router();
const catchErrors = require('../middlewares/catchErrors');

 const {
  projectList
 } = require ('../controllers/student.controller');

const { isLoggedIn } = require('../middlewares/auth.middlewares');

router.get('/student', isLoggedIn, catchErrors(projectList));

module.exports = router;