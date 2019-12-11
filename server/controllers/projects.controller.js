const Project = require ("../models/Project");
const User = require("../models/User")

exports.createProject = async (req,res) => {
  const { _id } = req.user;
  const { program, university, total, description, academic } = req.body;
  
  const project = await Project.create({
    program,
    university,
    total,
    description,
    academic,
    creator: _id,
  })
  const myProjects = await User.findByIdAndUpdate(
    _id, 
    { $push: {misProyectos: project._id}},
    { new: true }
  );

  req.user = myProjects
  res.status(201).json(project);
}

exports.upload = async (req, res) => {
  if(req.file) {
    const { secure_url } = req.file;
    res.json({img: secure_url})
  }
}

//lista proyectos
exports.getProjects = async(req, res) => {
  const projects = await Project.find();
  res.status(200).json({projects});
}

//detalle proyecto

exports.projectDetail = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  res.status(200).json(project);
};