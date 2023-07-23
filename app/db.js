const mongoose = require('mongoose');

exports.connectMonggose =()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://rajh3282:LSnPun0129FUcnnI@habitdb.siouwe9.mongodb.net/habitdb?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    })
    .then((e)=>console.log("Connected to Mongodb => Habit-Tracker"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}
