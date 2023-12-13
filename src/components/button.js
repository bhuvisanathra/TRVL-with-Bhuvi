import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

// Get Started is outline version
// Watch Trailer is Primary version with fill color in it
const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']


export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="https://www.youtube.com/watch?v=bIqsm1t-GHM&pp=ygUZYmFyZGEgd2lsZGxpZmUgc2FuY3R1YXJ5IA%3D%3D" className='btn-mobile' target='_blank'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} >
                {children}
            </button>
        </Link>
    )
}