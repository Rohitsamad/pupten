import React from 'react';
import { Nav, NavBtnLink, NavBtn, NavLink, NavMenu } from './Elements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>pupten.</h1>
                </NavLink>
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Product
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Pricing
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Blog
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Book a Demo
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Login
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/'>
                        Sign Up
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;
