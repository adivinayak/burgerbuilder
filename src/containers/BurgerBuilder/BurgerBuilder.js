import React , { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/modals/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from'../../axios-orders';
import Spinner from '../..//components/UI/spinner/spinner';

const INGREDIENT_PRICES ={
  salad:0.5,
  cheese:0.4,
  meat:1.3,
  bacon:0.7

};

class BurgerBuilder extends Component{
  state = {
    ingredients : {
      salad:0,
      bacon:0,
      cheese:0,
      meat:0

    },
     totalprice: 4,
     purchasble:false,
     purchasing:false,
     loading:false

  }

updatedpurchase = (ingredients) =>{

 const sum = Object.keys(ingredients)
 .map(igkey => {
     return ingredients[igkey]
 })
 .reduce((sum,el)=>{
    return sum+el;
 },0)
 this.setState({purchasble:sum > 0})
}

  addIngredients = (type) =>{
     const oldcount= this.state.ingredients[type];
     const updatedcount = oldcount + 1;
     const updatedingredients = {
          ...this.state.ingredients
     }
      updatedingredients[type] = updatedcount;
   const priceaddition = INGREDIENT_PRICES[type];
   const oldprice = this.state.totalprice;
   const newprice = oldprice + priceaddition;
   
   this.setState({totalprice:newprice, ingredients:updatedingredients})
   this.updatedpurchase(updatedingredients);
  }
  removeIngredients = (type) =>{
    if(this.state.ingredients[type] <= 0){
           return;
    }
    const oldcount= this.state.ingredients[type];
    const updatedcount = oldcount - 1;
    const updatedingredients = {
         ...this.state.ingredients
    }
     updatedingredients[type] = updatedcount;
  const priceaddition = INGREDIENT_PRICES[type];
  const oldprice = this.state.totalprice;
  const newprice = oldprice - priceaddition;

  this.setState({totalprice:newprice, ingredients:updatedingredients})
  this.updatedpurchase(updatedingredients);
  }

  purchasehandler = () =>[
    this.setState({purchasing :true})

  ]

  purchasecancelled =()=>{
    this.setState({purchasing:false})
  }

  purchasecontinued = ()=>{
  
  
  
 const queryparams = [];
 for (let i in this.state.ingredients) {
      queryparams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
 }


 queryparams.push('price=' + this.state.totalprice)
 const querystring = queryparams.join('&');

  this.props.history.push({
        pathname: '/checkout',
     search:  '?' + querystring

  })

  }

    render () {



  const  disabledInfo = {
     
       ...this.state.ingredients
    };
   for(let key in disabledInfo){
    disabledInfo[key] =  disabledInfo[key] <= 0
   }

let orderSummary = <OrderSummary ingredients={this.state.ingredients}
danger={this.purchasecancelled}
success={this.purchasecontinued}
price={this.state.totalprice}

/>



   if(this.state.loading){
orderSummary=<Spinner/>;
  
  }   

     return(
            <Aux>
           

             <Modal show={this.state.purchasing}
                    modalclosed={this.purchasecancelled}
           >
 
{orderSummary}
              
             </Modal>
               <Burger ingredients = {this.state.ingredients}/>
             
             <BuildControls   ingredientadded={this.addIngredients}
                              ingredientremoved = {this.removeIngredients}
                              disabled = {disabledInfo}
                              price={this.state.totalprice}
                              ordered = {this.purchasehandler}
                              purchasble={this.state.purchasble}
                                
             />
            </Aux>

    );


  }
}


export default BurgerBuilder;