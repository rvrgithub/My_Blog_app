const express =require("express");
const app = express();
app.use(express.json());

// Route import
const user = require("./routes/routes")
app.use("/",user)
module.exports= app  