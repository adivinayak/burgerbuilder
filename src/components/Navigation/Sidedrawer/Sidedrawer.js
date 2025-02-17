import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'
const sidedrawer= (props) =>{

let attachedclasses = [classes.SideDrawer,classes.Close]
    if(props.open){
        attachedclasses=[classes.SideDrawer,classes.Open]
    }
    return(
     <Aux>
     <Backdrop show={props.open} clicked={props.closed}/>
         <div className ={attachedclasses.join(' ')}>
        <div className={classes.Logo}><Logo/></div>
    <nav>
        <NavigationItems/>
    </nav>




         </div>
     
     </Aux>
    )

}

export default sidedrawer;