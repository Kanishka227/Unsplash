const mongoose = require("mongoose");
require("dotenv").config()

const connectDatabase = async() => {
  try{
    await mongoose.connect(process.env.DB_URL)
    .then(() => console.log("database connected successfully"))  
  }
  catch(error){
    console.log("error connecting to database",error);   
  }
}

module.exports = connectDatabase