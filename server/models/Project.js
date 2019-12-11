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
    }
  }
)

module.exports = model("Project", projecSchema);