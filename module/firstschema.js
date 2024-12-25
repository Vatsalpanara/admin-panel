const mongoose = require("mongoose");

const schema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    control:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        required:true
    },
    appt:{
        type:String,
        required:true
    }
});

const admin = mongoose.model("Data",schema);
module.exports = admin;