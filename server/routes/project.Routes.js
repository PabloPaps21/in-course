
const express = require('express');
const router  = express.Router();
const passport = require('passport');
const catchErrors = require('../middlewares/catchErrors')

const  {
  createProject
} = require ('../controllers/projectsController')

const { isLoggedIn, isNotLoggedIn, isConnected} = require('../middlewares/auth.middlewares');

router.post('/create', isLoggedIn, catchErrors(createProject));

router.get('/create', (req, res, next) => {
  res.status(200).json({msg: 'todo chido'})
});


module.exports = router;
