import React from 'react'
import { connect } from "react-redux";
//import store from '../store';

//window.store=store
const mapStateToProps = state => {
    return { user: state.username };
  };
  

function Nav(props){
   // alert(store.getState().user)
    if (!props.user) {
      return (<div>
        <ul>
            <li>Moment</li>
            <li>login</li>
            <li>register</li>
        </ul>
    </div>)
        
    } else {
   return (
            <div>
                <ul>
                    <li>Moment</li>
                    <li>othr stuffs</li>
                    <li>{props.user}</li>
                </ul>
            </div>
        )
    }
}

const Navbar =connect(
    mapStateToProps
)(Nav)

export default Navbar

