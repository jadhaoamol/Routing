import React from 'react'
import {  NavLink } from 'react-router-dom'

function Navbar() {
    // Link we dont have active class byDefault
    // <Link to={'/'}>Home</Link>
    //            <Link to={'/about'}>About</Link>
    //             <Link to={'/contact'}>Contact</Link>

    // in case of NavLink we get active class byDefault
    // <NavLink to={'/'}>Home</NavLink>
    // <NavLink to={'/about'}>About</NavLink>
    // <NavLink to={'/contact'}>Contact</NavLink>

    // const NavLinkCss = (IsActive) => {
    //     return {
    //         fontWeight: IsActive ? 'bold' : 'normal',
    //         fontSize: IsActive ? '23px' : 'normal'
    //     }
    // }
    // <NavLink style={NavLinkCss} to={'/'}>Home</NavLink>
    //             <NavLink style={NavLinkCss} to={'/about'}>About</NavLink>
    //             <NavLink style={NavLinkCss} to={'/contact'}>Contact</NavLink>
    return (
        <>
            <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/products'}>Products</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            </nav>
            
        </>
    )
}

export default Navbar
