const userData = require('../database/userSchema');
var jwt = require("jsonwebtoken");


class authCont{
    login(req, res){
        var {username, password}=req.body

        userData.findOne({ 
            username: username,
            password: password
        }, (err, data)=>{
            if (err) {
                res.status.send(err.toString())
            }else{
             const token = jwt.sign({
               _id:data._id
             }, "myKey")
             
             /*   res.json({token:token,
                  username :data.username
                })*/
              res.cookie("token", token).send()
            }
        })
    }

    register(req, res){
        var {username, password,
          name, dob, email, country
        }=req.body
        var newUser = new userData({
            username:username,
            password:password,
            name:name,
            dob:dob,
            email:email,
            country:country
        })
        newUser.save((err, data)=>{
            if (err) {
                res.send(err.toString())
            }else{
                res.send(data)
            }
        })

    }
}

module.exports =new authCont()