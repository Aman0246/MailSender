const express =require("express")
const { sendemailController } = require("./Controller")
const routes=express.Router()

routes.get("/sendMail",sendemailController)




module.exports={routes} 