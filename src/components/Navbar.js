import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './button';

// rfce => create react components
// imr => import React from 'react'

function Navbar() {

    const [click,setClick] = useState(false);
    const [button,setButton] =useState(true);

    // Functions 
    
    // it converts bars to cross
    const handleClick= () =>setClick(!click);

    //closeMobileMenu
    const closeMobileMenu =() =>setClick(false);

    //It wil work for responsiveness
    const showButton =()=>{
        if(window.innerWidth <=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    //useEffect: render one time and not gone shown up anymore
    useEffect(()=>{
        showButton()
    },[]);

    window.addEventListener('resize',showButton)
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    
                    {/* Logo for the Navbar */}
                    {/* It closes the navbar when we tap on logo */}
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL with Bhuvi <i className="fab fa-typo3"></i>
                    </Link>


                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>

                    <ul className={click?'nav-menu active':'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links-mobile' onClick={closeMobileMenu}>Sign up</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN-UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar