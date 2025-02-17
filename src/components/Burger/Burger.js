import React from 'react';
import BurgerIngrident from './BurgerIngrident/BurgerIngrident';
import classes from './Burger.module.css'

const burger = (props) =>{

    let transformedIngredients= Object.keys(props.ingredients)
    .map(igkey => {
              return [...Array(props.ingredients[igkey])].map((_, i) => {
              return    <BurgerIngrident key = {igkey + i } type={igkey}/>;


              });

    }).reduce((arr,el)=>{

    return arr.concat(el)
    },[]);


    if (transformedIngredients.length ===0){
     transformedIngredients=  <p>please add some ingredients !</p>

    }


    return(
        <div className= {classes.Burger}>

        <BurgerIngrident type = "bread-top"/>
        {transformedIngredients}
        <BurgerIngrident type = "bread-bottom"/>

        </div>
    )
}
export default burger;