import React from 'react';
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Togglehandler from '../Sidedrawer/togglehandler/Togglehandler'
import Logo from '../../Logo/Logo'


const toolbar = (props) =>(
<header className={classes.Toolbar}>
<Togglehandler clicked={props.showtoggle}/>
<div className={classes.Logo}><Logo/></div>

<nav className={classes.DesktopOnly}>
    <NavigationItems/>
</nav>



</header>
  
) 

export default toolbar;