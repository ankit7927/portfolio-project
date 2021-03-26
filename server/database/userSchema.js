const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username :{
        type : String,
        unique : true,
        requred :true
    },
    password : String
})

module.exports = mongoose.model("userData", userSchema)