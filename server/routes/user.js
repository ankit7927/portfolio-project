const express = require('express');
var router = express.Router()
var userCont = require("../controller/userController")
const authenticator = require("../bin/middlewere")

router.get("/userdata", authenticator, userCont.userInfo)

module.exports=router;