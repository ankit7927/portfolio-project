const userData = require('../database/userSchema');



class userCont{
  userInfo(req, res){
   const user_id = req.user._id
   userData.findOne({_id:user_id}, (err, data)=>{
     if (err) {
       res.status(400).send(err.toString())
     }else{
       res.send(data)
     }
   })
  }
  
}


module.exports = new userCont()