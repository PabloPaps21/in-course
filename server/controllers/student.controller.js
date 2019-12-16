const User = require ("../models/User");

//obtener proyectos por estudiante
exports.projectList = async ( req, res) => {
  const { _id } = req.user;
  const listaProyectos = await User.findById(_id).populate("misProyectos")
  res.status(200).json({listaProyectos})
}