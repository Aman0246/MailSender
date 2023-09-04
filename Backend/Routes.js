const express =require("express")
const { sendemailController } = require("./Controller")
const routes=express.Router()

routes.post("/sendMail",sendemailController)




module.exports={routes} 