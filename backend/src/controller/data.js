const express = require("express");
const Users = require("../model/data");
require("dotenv").config();





 const Data = async(req,res)=>{
    try{
      const data = new Users(req.body)
      const createData =  await data.save();
      res.status(201).json({status : "success", data:createData});
    }catch(err){
        res.status(400).json({status:"fail",message:err.message});
    }
};





module.exports = {Data};