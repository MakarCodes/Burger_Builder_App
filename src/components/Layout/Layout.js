import React from 'react';

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar />
            <SideDrawer />
            <div>Toolbar, SideDrawer,BackDrop</div>
            <main className={classes.Content}>{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;