const express = require('express');
const router  = express.Router();
const passport = require('passport');
const catchErrors = require('../middlewares/catchErrors')

const { 
  createInvest,
  getInvestments,
  updateInvesment,
  deleteInvest,
  investDetail
} = require('../controllers/investorController');

const {isLoggedIn, isNotLoggedIn, IsConnected } = require('../middlewares/auth.middlewares')
//crear
router.post('/create-invest', (catchErrors(createInvest)))
//lista
router.get("/invests", catchErrors(getInvestments));
//detalle?
router.get("/invest-detail/:id", catchErrors(investDetail));

//editar
router.patch("/invest-update/:id", catchErrors(updateInvesment));
//eliminar
router.delete("/invest-delete/:id", catchErrors(deleteInvest));

module.exports = router;