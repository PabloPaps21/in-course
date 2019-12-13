const Investment = require ('../models/Investment');
const Project  = require('../models/Project');
const User = require('../models/User')

//crear inversion
exports.createInvest = async(req, res, next) => {
  const { quantity, project } = req.body
  const { _id } = req.user
  try {
  const invest = await Investment.create({
    quantity, projectId: project._id, investorId:_id, studentId: project.creator
  });
  let actual = parseFloat(project.actual) + parseFloat(quantity)
  await Project.findByIdAndUpdate(project._id, { actual });

  const myInvests = await User.findByIdAndUpdate(
    {_id}, 
    { $push: { misInversiones: invest._id}},
    { new: true }
  );

  res.status(200).json({invest, myInvests})
  } catch (e) {
    console.log(e)
  }
}

//obtener todas las inversiones por usuario
exports.getInvestments = async (req, res) => {
  const investments = await Investment.findOne({ investorId: req.user._id }); 
  res.status(200).json({ investments })
}

//detalle inversion
exports.investDetail = async (req, res) => {
  const { id } = req.params;
  const invest = await Investment.findById(id).populate('projectId');
  res.status(200).json(invest);
};

//editar inversiones
exports.updateInvestment = async (req, res) =>{
  const { quantity } = req.body;
  const { id } = req.params;
  const investments = await Investment.findByIdAndUpdate(id, { quantity });
  res.status(200).json(investments)
}

//eliminar inversion
exports.deleteInvestment = async(req, res) => {
  const { id } = req.params;
  await Investment.findByIdAndDelete(id);
  res.status(200).json({ message:"delete" });
}
