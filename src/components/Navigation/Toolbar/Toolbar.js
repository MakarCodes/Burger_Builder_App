import React from 'react';

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle'
import { checkPropTypes } from 'prop-types';

const Toolbar = ({sideDrawerClicked, isAuth}) => {
    return (
        <header className={classes.Toolbar}>
            <SideDrawerToggle clicked={sideDrawerClicked}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems isAuth={isAuth}/>
            </nav>
        </header>
    );
};

export default Toolbar;