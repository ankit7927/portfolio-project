import React from 'react'
import { connect } from "react-redux";
//import store from '../store';

//window.store=store
const mapStateToProps = state => {
    return { user: state.user };
  };
  

function Nav({user}){
   // alert(store.getState().user)
    if (user) {
        return (
            <div>
                <ul>
                    <li>Moment</li>
                    <li>othr stuffs</li>
                    <li>{user}</li>
                </ul>
            </div>
        )
    } else {
   return (<div>
        <ul>
            <li>Moment</li>
            <li>login</li>
            <li>register</li>
        </ul>
    </div>)
    }
}

const Navbar =connect(
    mapStateToProps
)(Nav)

export default Navbar

