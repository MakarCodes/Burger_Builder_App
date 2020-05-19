import React, { Component } from 'react';
import { connect } from 'react-redux'

import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

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
            <Toolbar 
            isAuth={this.props.isAuthenticated}
            sideDrawerClicked={this.displaySideDrawerHandler}/>
            <SideDrawer
            isAuth={this.props.isAuthenticated} 
            openSideDrawer={this.state.displayingSideDrawer}
            closeSieDrawer={this.closingSideDrawerHandler}/>
            <main className={classes.Content}>{this.props.children}</main>
        </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);