const { model, Schema } = require ("mongoose");


const investmentSchema = new Schema (
  {
    investorId: {
      type: Schema.Types.ObjectId,
      ref: "User"     
    },
    studentId: {
      type: Schema.Types.ObjectId,
      ref:"User"
    },
    quantity: {
      type: Number
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref:"Project"
    }
  }
)

module.exports = model("Investment", investmentSchema);