const userData = require('../database/userSchema');

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
                res.send(data)
            }
        })
    }

    register(req, res){
        var {username, password}=req.body
        var newUser = new userData({
            username:username,
            password:password
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