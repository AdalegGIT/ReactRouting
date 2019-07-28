import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navStyle = {
        display:'flex',
        justifyContent:'space-around'
    }

    const liStyle = {
        display:"inline-block",
        margin: '14px'
    }
    return(
        <div style={navStyle}>
            <Link to="/">
            <h1>LOGO</h1>
            </Link>

            <ul>
            <Link to="/about">
            <li style={liStyle}>About</li>
            </Link>

            <Link to="/shop">
            <li style={liStyle}>Shop</li>
            </Link>
            </ul>
        </div>
        
    )
}

export default NavBar;