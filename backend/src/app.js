const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
require("./db/connection");
const router = require("./router/data");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/",  router);



app.listen(PORT , ()=>{
    console.log(`listening Port ${PORT}`);
})