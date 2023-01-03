const mongoose = require("mongoose");




var mobileSchema = new mongoose.Schema({
   
    mode:{
        type: String,
        required: true,
    },date:{
        type: String,
        required: true,
    },email:{
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
       
    },
    facility: {
        type: String,
        required: true,
        
    }
    ,
   
    quantity: {
        type: String,
        required: true,
        
    }
    ,literdistance: {
        type: String,
        required: true,
        
    },fuel: {
        type: String,
        required: true,
        
    },co2: {
        type: Number,
        required: true,
        
    },
    category: {
        type: String,
        required: true,
        
    },subcat: {
        type: String,
        required: true,
        
    },air:{
        type:String
    },weight:{
type:String
    }

});



// createing model
const mobiledb = new mongoose.model("mobilecombustions", mobileSchema);

module.exports = mobiledb;