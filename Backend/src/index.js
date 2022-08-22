

const express = require("express");
const cors=require("cors")
const app = express();

app.use(express.json());
app.use(cors());
const userController = require("./controllers/user.controllers");
const posterController=require("./controllers/postercontroller")

app.use("/api/v1/user",userController);
app.use("/api/v1/poster",posterController)
module.exports = app;
