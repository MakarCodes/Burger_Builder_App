import React from 'react';
import classes from './SideDrawerToggle.module.css'

const SideDrawerToggle = ({ clicked }) => {
    return (
        <button 
            className={classes.Hamburger}
            onClick={clicked}>
            <span className={classes.HamburgerBox}>
                <span className={classes.HamburgerInner}></span>
            </span>
        </button>
    );
};

export default SideDrawerToggle;