import React, {useState} from 'react'
import {connect} from 'react-redux'
import { addUser } from "../actions/index";
import axios from "axios"
// props.addUser({user})
function mapDispatchToProps(dispatch) {
    return {
      addUser: name => dispatch(addUser(name))
    };
  }

function LoginUser(props){
    const [username, setuser]=useState("")
    const [password, setpass]=useState("")

    const clicked=()=>{
        axios.post("http://localhost:4000/auth/login", {
            username:username,
            password:password
        }).then((res)=>{
            alert(res.data)
        }).catch(err => alert(err))
    }

    return (
        <div>
           username: <input type="text" onChange={(e)=>{setuser(e.target.value)}}/><br/>
           password: <input type="text" onChange={(e)=>{setpass(e.target.value)}}/><br/>
           <input type="submit" value="submit" onClick={clicked}/>
        </div>
    )
}


const Login =connect(
    null,
    mapDispatchToProps
)(LoginUser)

export default Login
