const { Schema, model } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema (
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim:true
    },
    phone: {
      type: Number
    },
    role: {
      type: String, 
      enum: ["Student", "Investor"],
      default: "Student"
    },
    aboutMe:{
      type:String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = model("User", userSchema);