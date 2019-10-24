import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css';

const controls =[
{ label : 'Salad', type:'salad'},
{ label : 'Bacon', type:'bacon'},
{ label : 'Cheese', type:'cheese'},
{ label : 'Meat', type:'meat'}
];


const buildcontrols = (props) => (
    <div className={classes.BuildControls}>
    <p> current price :<strong>{props.price.toFixed(2)}</strong></p>
   {controls.map(ctrl =>(
       
       <BuildControl key={ctrl.label}
        label={ctrl.label}
        added={ () => props.ingredientadded(ctrl.type)}
        removed = {()=> props.ingredientremoved(ctrl.type)}
        diabled = {props.disabled[ctrl.type]}
         />
   )
   
   )}

   <button className = {classes.OrderButton} 
          disabled = {!props.purchasble}
          onClick = {props.ordered}
   >order now </button>
</div>
)
    



export default buildcontrols;