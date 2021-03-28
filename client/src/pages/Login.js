import React from 'react'
import {connect} from 'react-redux';
const Login = (props) => {
    return (
        <div>
           username: <input type="text" /><br/>
           password: <input type="text" /><br/>
           <input type="submit" value="submit" onClick={()=>{props.dispatch({type:"setUser", payload :{user:"ankit"}})
        console.log(props.state)}}/><br/>
        </div>
    )
}
function mapStateToProps(state) {
   return state=state
}
export default connect(mapStateToProps)(Login)
