import React from 'react'
//import {Redirect} from 'react-router-dom'
import axios from "axios"

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:"",
      dob:"",
      email:"",
      dp:"",
      country:"",
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
        axios.post("http://localhost:4000/auth/reg", this.state).then((res)=>{
          localStorage.setItem("userInfo", res.data.username)
           this.redirectToHome("home")
        }).catch(err => alert(err))
    }
    
    render(){
    return (
        <div>
        <h1>Register page</h1>
        <form onSubmit={this.submit}>
       name: <input type="text" onChange={e => this.setState({
             name:e.target.value
           })} /><br/>
       
       email: <input type="email" onChange={e => this.setState({
             email:e.target.value
           })}/><br/>
           
        dob: <input type="date" onChange={e => this.setState({
             dob:e.target.value
           })}/><br/>
           
         dp: <input type="file" onChange={e => this.setState({
             dp:e.target.value
           })}/><br/>
           
         country: <input type="text" onChange={e => this.setState({
             country:e.target.value
           })}/><br/>
           
           
           username: <input type="text" onChange={e => this.setState({
             username:e.target.value
           })} name="username"/><br/>
           password: <input type="text" onChange={e => this.setState({
             password:e.target.value
           })} name="password"/><br/>
           <input type="submit" value="submit" />
         </form>
        </div>
    )
    }
}


export default Register
