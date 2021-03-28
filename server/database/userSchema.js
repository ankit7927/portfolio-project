const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name:String,
    profilePic :String,
    username :{
        type : String,
        unique : true,
        requred :true
    },
    password : String,
    
    moments:[
        {
            postImageName :String,
            likes:{
                type:Number,
                default:0
            },
            comments:[{
                commenter_id : String,
                comments:String
            }]
        }
    ],
    followers:[{
        persion_id:String
    }]
})

module.exports = mongoose.model("userData", userSchema)