const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
        enum:["Online","Offline","Both"],
        default:"Both"
    },
    imageUrl:{
        type:String,
        required:true,
        default:"https://placehold.co/600x400"
    },
    hostedBy:{
        type:String,
        required:true
    },
    details:{
        type:String,
    },
    descriptions:{
        dressCode:{type:String},
        ageRestrictions:{type:String}
    },
    tags:[{type:String}],
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    },
    pricing:{
        type:String,
        default:"Free"
    },
    speakers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Speaker",
    }]
})

const Event = mongoose.model("Event",eventSchema)

module.exports=Event

  