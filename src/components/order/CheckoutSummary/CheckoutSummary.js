import React from 'react'
import Burger from'../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutsummary = (props) => {

return(
<div className={classes.CheckoutSummary}>
    <h1>
        i hope it tastes well !
    </h1>
<div style={{width:'120%',margin:'auto'}}>
<Burger ingredients= {props.ingredients}/>


</div>
<Button btnType="Danger"
     clicked={props.checkoutCancelled}
> cancel</Button>
<Button btnType="Success"
      clicked={props.checkoutcontinued}
>continue</Button>

</div>




)



}
export default checkoutsummary;
