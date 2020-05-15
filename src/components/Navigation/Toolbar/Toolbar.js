import React from 'react';

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'

const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;