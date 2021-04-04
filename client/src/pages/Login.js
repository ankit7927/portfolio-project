import React from 'react'
//import {Redirect} from 'react-router-dom'
import axios from "axios"

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      userInfo:"",
      username:"",
      password:"",
    }
  }
  
  
    
    redirectToHome =(name) => {
    const path = `/${name}`
    const {
      history
    } = this.props;
    if (history) history.push(path);
  }
    submit=(e)=>{
      e.preventDefault()
        axios.post("http://localhost:4000/auth/login", {
            username:this.state.username,
            password:this.state.password
        }).then((res)=>{
          localStorage.setItem("token", res.data.token)
          
          localStorage.setItem("userInfo", res.data.username)
           this.redirectToHome("home")
        }).catch(err => alert(err))
    }
    
    render(){
    return (
        <div>
        <h1>login page</h1>
        <form onSubmit={this.submit}>
           username: <input type="text" onChange={e => this.setState({
             username:e.target.value
           })} name="username"/><br/>
           password: <input type="text" onChange={e => this.setState({
             password:e.target.value
           })} name="password"/><br/>
           <input type="submit" value="submit" />
         </form>
                    <hr/>
           <button onClick={()=>{this.redirectToHome("reg")}}>Register</button>
         
        </div>
    )
    }
}


export default Login
