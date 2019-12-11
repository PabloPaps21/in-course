const express = require('express');
const router  = express.Router();
const passport = require('passport');
const catchErrors = require('../middlewares/catchErrors')

const { 
  createInvest,
  getInvestments,
  updateInvestment,
  deleteInvest,
  investDetail
} = require('../controllers/invest.controller');

const {isLoggedIn, isNotLoggedIn, IsConnected } = require('../middlewares/auth.middlewares')
//crear
router.post('/invest', isLoggedIn,(catchErrors(createInvest)))
//lista
router.get("/invest", isLoggedIn,catchErrors(getInvestments));
//detalle
router.get("/invest/:id", isLoggedIn, catchErrors(investDetail));

//editar
router.patch("/invest/:id", isLoggedIn, (updateInvestment));
//eliminar
router.delete("/invest/:id", isLoggedIn,catchErrors(deleteInvest));

module.exports = router;