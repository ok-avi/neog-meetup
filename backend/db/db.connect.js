const mongoose = require("mongoose")
require("dotenv").config()
const mongoURI = process.env.MONGODB

const initializeDB = async ()=>{
    try{
        await mongoose.connect(mongoURI)
        console.log("Database connected")

    } catch(error){
        error=>console.log("Error while connection to DB",error)

    }
    
}

module.exports=initializeDB