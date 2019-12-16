const Project = require ("../models/Project");
const User = require("../models/User")

//crear proyecto
exports.createProject = async (req,res) => {
  const { _id } = req.user;
  const { program, university, total, description, academic, grade } = req.body;
  
  const project = await Project.create({
    program,
    university,
    total,
    grade,
    description,
    academic:req.file.secure_url,
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

exports.uploadAcademic = async (req, res) => {
  if (req.file) {
    const { secure_url } = req.file;
    await Project.findByIdAndUpdate(req.body._id, { image: secure_url})
  
  .then(() =>{ 
    res.status(200).json({ file: req.file })})
  .catch(err => console.log(err));
}
  console.log(req.file)
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