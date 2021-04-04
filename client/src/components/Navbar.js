import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"

function Navbar(props){
  const [user, setUser] = useState("")
  
  useEffect(()=>{
    setUser(localStorage.getItem("userInfo"))
  }, [])
  
   return (
            <div>
                <ul>
                    <li><Link to="/">Moment</Link></li>
                    <li>othr stuffs</li>
                    <li><Link to="/profile">{user}</Link></li>
                </ul>
            </div>
        )
    
}

export default Navbar

