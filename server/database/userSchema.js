const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name:String,
    profilePic :String,
    dob:Date,
    email:String,
    country:String,
    username :{
        type : String,
        unique : true,
        requred :true
    },
    password : {
        type : String,
        requred :true
    },
    
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
    }],
    following:[{
        persion_id:String
    }]
})

module.exports = mongoose.model("userData", userSchema)