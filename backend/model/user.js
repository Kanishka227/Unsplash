const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  images: [
   {
    src: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
   }
  ]
},{timestamps:true})

const User = mongoose.model("User",userSchema)

module.exports = User