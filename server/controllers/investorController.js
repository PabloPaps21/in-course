const Invesment = require ('../models/Investment');
const Project  = require('../models/Project');
const User = require('../models/User')

//crear inversion
exports.createInvest = async(req, res, next) => {
  const { quantity, proyectId } = req.body
  const invest = await Invesment.create({
    quantity, proyectId
  });
  res.status(200).json(invest)
}

//obtener todas las inversiones
exports.getInvestments = async (req, res) => {
  const investments = await Invesment.find();
  res.status(200).json({ investments })
}

//detalle inversion
exports.investDetail = async (req, res) => {
  const { id } = req.params;
  const invest = await Invesment.findById(id).populate("investorId");
  res.status(200).json(invest);
};

//editar inversiones
exports.updateInvesment = async (req, res) =>{
  const { quantity } = req.body;
  const { id } = req.params;
  const investments = await Invesment.findByIdAndUpdate(id, { quantity });
  res.status(200).json(investments)
}

//eliminar inversion
exports.deleteInvestment = async(req, res) => {
  const { id } = req.params;
  await Invesment.findByIdAndDelete(id);
  res.status(200).json({ message:"delete" });
}
