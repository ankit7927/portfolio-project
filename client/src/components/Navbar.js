import React from 'react'

const Navbar = (props) => {
    if (props.user) {
        return (
            <div>
                <ul>
                    <li>Moment</li>
                    <li>othr stuffs</li>
                    <li>user profile</li>
                </ul>
            </div>
        )
    } else {
    <div>
        <ul>
            <li>Moment</li>
            <li>login</li>
            <li>register</li>
        </ul>
    </div>
    }
}

export default Navbar
