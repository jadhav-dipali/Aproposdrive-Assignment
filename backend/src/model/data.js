const mongoose = require("mongoose");

const SchemaData = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true, 
    }
})

const Data = new mongoose.model("Data" , SchemaData);

module.exports= Data;