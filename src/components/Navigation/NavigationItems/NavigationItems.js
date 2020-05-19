import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = ({isAuth}) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem exact link='/'>Burger Builder</NavigationItem>
            {isAuth ? <NavigationItem link='/orders'>Orders</NavigationItem> : null}
            {isAuth 
            ? <NavigationItem link="/logout">Logout</NavigationItem>
            : <NavigationItem link="/auth">Authenticate</NavigationItem>}
        </ul>
    );
};

export default NavigationItems;