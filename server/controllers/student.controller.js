const User = require ("../models/User");

//obtener proyectos por estudiante
exports.projectList = async ( req, res) => {
  const { _id } = req.user;
  const listaProyecto = await User.findById(_id).populate("misProyectos")
  res.status(200).json({listaProyecto})
}