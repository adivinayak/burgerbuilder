import React ,{Component} from 'react';
import  CheckoutSummary from '../../components/order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';

import ContactData from '../checkout/ContactData/ContactData'

class Checkout extends Component {
    state={

        ingredients: null,
        totalprice:0

        
    }
    

    componentWillMount () {

        const query = new URLSearchParams(this.props.location.search);

         const ingredients={};
         let price = 0;
         for (let param of query.entries()) {
              if (param[0] === 'price'){
             price = param[1];

              }
              else{
            ingredients[param[0]] = +param[1]
         }
        }
    this.setState({ingredients:ingredients,totalprice:price})

    }

    checkoutcancelledhandler =()=>{

        this.props.history.goBack()
    }
   checkoutcontinuedhandler = ()=>{
this.props.history.push('/checkout/contact-data');

   }

    
    
    render () {

return (
<div>
<CheckoutSummary ingredients={this.state.ingredients}
              checkoutCancelled={this.checkoutcancelledhandler}
              checkoutcontinued={this.checkoutcontinuedhandler}
     
/>
<Route path= {this.props.match.path + '/contact-data'}
 render={() => (<ContactData ingredients={this.state.ingredients }   price={this.state.totalprice}/>)} />



</div>

)

    }


}

export default Checkout;
