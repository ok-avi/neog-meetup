const express = require("express")
require("dotenv").config()
const Event = require("./models/event.models.js")
const Speaker = require("./models/speaker.model.js")
const Address = require("./models/address.models.js")
const initializeDB = require("./db/db.connect.js")
const cors =require("cors")
const app = express()

initializeDB()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000


app.get("/",(req,res)=>{
    res.send("App running express")
})

async function fillData(data){
    try {
        const Event = new Event(data)
        const savedData = await Event.save()
        return savedData
    } catch (error) {
        throw error
    }
}

app.post("/events",async(req,res)=>{
    try {
        const event = await fillData(req.body)
        res.status(201).json({message:"Event created",event:event})
    } catch (error) {
        console.log("Error while creating Event")
    }
})

async function readAllEvents(){
    try{
        const events = await Event.find().populate("address")
        // console.log(events)
        return events
    } catch(error){
        throw error
    }
}

app.get("/events",async(req,res)=>{
    try{
        const events = await readAllEvents()
        // console.log(JSON.stringify(events,null,2))
        res.status(200).json(events)
    } catch(error){
        res.status(500).json({error:"Error while fetching Events"})
    }
})

async function readEventById(id) {
    try{
        const event = await Event.findById(id).populate("address").populate("speakers")
        return event
    } catch(error){
        throw error
    }
}

app.get("/events/:eventId",async(req,res)=>{
    try{
        const event = await readEventById(req.params.eventId)
        // console.log(JSON.stringify(event,null,2))
        res.status(200).json(event)
    } catch(error){
        res.status(500).json({error:"Error while fetching events by id"})
    }
})

app.listen(PORT,()=>{
    console.log("Server running at port",PORT)
})


