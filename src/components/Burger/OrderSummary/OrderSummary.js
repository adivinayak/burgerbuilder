import React from 'react';
import Aux from '../../../hoc/Aux';
 import Button from '../../UI/Button/Button';
const ordersummary  = (props) => {
  const ingredientssummary =  Object.keys(props.ingredients)
 .map(igkey =>{

    return <li  key={igkey}>
     <span>{igkey}</span>:{props.ingredients[igkey]}

    </li>
 })
  
  
    return(
   <Aux>
  <h3>Your order </h3>
  <p> A delicious order with the following ingredients:</p>
  <ul>

  {ingredientssummary}
  </ul>
  <p>total price :{props.price.toFixed(2)}</p>
<p>proceed to cgeckout ?</p>
<Button btnType ="Danger" clicked={props.danger} >cancel </Button>
<Button btnType ="Success" clicked ={props.success} >continue </Button>
   </Aux>

   )

}

export default ordersummary;