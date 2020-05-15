import React, { Component } from 'react';

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        displayingSideDrawer: false
    }

    closingSideDrawerHandler = () => {
        this.setState({displayingSideDrawer: false})
    }

    displaySideDrawerHandler = () => {
        this.setState((prevState) => {
            return {displayingSideDrawer: !this.state.displayingSideDrawer};
        })
    }
    render() {
        return (
        <React.Fragment>
            <Toolbar sideDrawerClicked={this.displaySideDrawerHandler}/>
            <SideDrawer 
            openSideDrawer={this.state.displayingSideDrawer}
            closeSieDrawer={this.closingSideDrawerHandler}/>
            <main className={classes.Content}>{this.props.children}</main>
        </React.Fragment>
        );
    }
}

export default Layout;