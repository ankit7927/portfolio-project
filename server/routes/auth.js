const express = require('express');
var router = express.Router()
var authCont = require("../controller/authController")

router.post("/login", authCont.login)
router.post("/reg", authCont.register)

module.exports=router;