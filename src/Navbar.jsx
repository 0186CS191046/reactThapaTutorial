import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
    return(
        <>
            <div className='navbar'>
            <NavLink className="list" to="/">Home</NavLink>
            <NavLink className="list" to ='/about'>About Us</NavLink>
            <NavLink className="list" to='/contact'>Contact Us</NavLink>
            <NavLink className="list" to='/service'>Service</NavLink>
            </div>
        </>
    )
}

export default Navbar;