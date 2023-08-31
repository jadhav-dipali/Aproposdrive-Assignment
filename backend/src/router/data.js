const express =require("express");
const Router = express.Router();
const {Data } = require("../controller/data.js")

Router
  .route('/data')
  .post(Data)

 

  module.exports = Router;