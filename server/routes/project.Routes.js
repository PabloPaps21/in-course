
const express = require('express');
const router  = express.Router();
const passport = require('passport');
const catchErrors = require('../middlewares/catchErrors')

const  {
  createProject,
  getProjects,
  projectDetail
} = require ('../controllers/projects.controller')

const { isLoggedIn, isNotLoggedIn, isConnected} = require('../middlewares/auth.middlewares');

router.post('/project', isLoggedIn, catchErrors(createProject));

router.get('/project', (req, res, next) => {
  res.status(200).json({msg: 'todo chido'})
});

//lista de proyectos
router.get('/project', isLoggedIn, catchErrors(getProjects))

//detalle de proyectos 
router.get("/project/:id", isLoggedIn ,catchErrors(projectDetail));

module.exports = router;
