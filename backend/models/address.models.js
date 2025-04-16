const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    city:String,
    pincode:String,
    state:String,
    country:String,
})

const Address =  mongoose.model("Address",addressSchema)

module.exports=Address