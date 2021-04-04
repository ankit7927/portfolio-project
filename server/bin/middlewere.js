var jwt = require("jsonwebtoken");

const authenticator=(req, res, next)=>{
  const accessToken = req.cookies.token
  if (!token) {
    return res.status(400).send("please login")
  }
  let payload
  try {
    payload=jwt.verify(accessToken, "myKey")
    
    req.user={
      _id:payload._id
    }
    next()
    
  } catch (e) {
    res.status(400).send(e.toString())
  }
}

module.exports = authenticator