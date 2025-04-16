const mongoose = require("mongoose")

const speakersSchema = new mongoose.Schema({
    imageUrl:{
        type:String,
    },
    name:{
        type:String,
    },
    designation:String
})

const Speaker = mongoose.model("Speaker",speakersSchema)

module.exports=Speaker