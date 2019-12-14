const { Schema, model } = require('mongoose');

const projecSchema = new Schema(
  {
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    description: {
      type: String
    },
    university: {
        type:String
    },
    program: {
        type: String
    },
    total: {
        type: Number
    },
    actual:{
      type:Number,
      default: 0
    },
    status:{
      type: String, 
      enum: ["Active", "Inactive"],
      default: "Active"
    },
    grade:{
      type: Number,
      default: 6
    },
    academic: {
      type: String,
      default: "https://cdn5.dibujos.net/dibujos/pintar/diploma-escolar.png"
    }
  }
)

module.exports = model("Project", projecSchema);