const express = require('express');
const router  = express.Router();
const passport = require('passport');

const {
  signup,
  login,
  logout,
  profile,
} = require ('../controllers/auth.controller')

const { isLoggedIn, isNotLoggedIn, isConnected} = require('../middlewares/auth.middlewares');

//home
router.get('/', (req, res, next) => {
  res.status(200).json({msg: 'pagina principal'})
});


router.post('/signup', signup)
router.get('/signup',(req,res,netx)  => {
  res.status(200).json({msg: 'signup'})
});


router.post('/login', passport.authenticate('local'), login)
router.get('/login',(req,res,netx)  => {
  res.status(200).json({msg: 'login'})
});

router.get('/logout', logout)


router.get('/profile', profile)



module.exports = router;




