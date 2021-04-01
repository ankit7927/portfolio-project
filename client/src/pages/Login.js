import React, {useState, Link} from 'react'
import {connect} from 'react-redux'
import { addUser } from "../actions/index";
import {Redirect} from 'react-router-dom'
import axios from "axios"
// props.addUser({user})
function mapDispatchToProps(dispatch) {
    return {
      addUser: userinfo => dispatch(addUser(userinfo))
    };
  }

class LoginUser extends React.Component{
  constructor(props){
    super(props)
    this.state={
      username:"",
      password:"",
      //userinfo:""
    }
  }
   /* const [username, setuser]=useState("")
    const [password, setpass]=useState("")
    const [userinfo, setInfo]=useState()
    */
    
    redirectToHome = () => {
    const path = '/home'
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
            //setInfo(res.data)
            var x = res.data
            addUser({x})
            alert(res.data.username)
           // this.props.history.push("/")
           this.redirectToHome()
        }).catch(err => alert(err))
    }
    
    onChangeHand=(e)=>{
      
    }
    render(){
    return (
        <div>
        <form onSubmit={this.submit}>
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


const Login =connect(
    null,
    mapDispatchToProps
)(LoginUser)

export default Login
