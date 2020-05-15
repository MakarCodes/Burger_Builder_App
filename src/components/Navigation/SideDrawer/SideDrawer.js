import React from 'react';

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = ({closeSieDrawer, openSideDrawer}) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(openSideDrawer) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <React.Fragment>
            <Backdrop 
                showBackdrop={openSideDrawer}
                hideBackdrop={closeSieDrawer}/>
                <div className={attachedClasses.join(' ')}>
                    <div className={classes.Logo}>
                        <Logo/>
                    </div>
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
        </React.Fragment>
    );
};

export default SideDrawer;