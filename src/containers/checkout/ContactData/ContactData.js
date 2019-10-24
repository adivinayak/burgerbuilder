import  React ,{Component}  from 'react';
import Button from '../../../components/UI/Button/Button'
 import classes from './ContactData.module.css';
 import axios from '../../../axios-orders';
 import { withRouter } from "react-router";
 import Spinner from '../../../components/UI/spinner/spinner'
class ContactData extends Component {

state={
    name:'',
    email:'',
    address:{
            street:'',
            postalcode:''

    },
    loading:false



}

orderhandler=(event)=>{
     event.preventDefault();
    
     
this.setState({loading:true})
  const post={
    
   ingredients:this.props.ingredients,
    price:this.props.price,
    customer:{
      name:'aditya vinayak',
      email:'adivinayak.av@gmail.com'

    }


      
    
   }
   axios.post('/orders.json',post)
   .then(response=>{

    this.setState({loading:false})
    this.props.history.push('/')
   })
          

   .catch(error =>{
     this.setState({loading:false})


   });
}

render () {

let form=(

<form>
<input type="text" name="name" placeholder="your name"/>
<input type="text" name="email" placeholder="your email"/>
<input type="text" name="street" placeholder="street"/>
<input type="text" name="postal code" placeholder="postal code"/>
<Button btnType="Success" clicked={this.orderhandler}> order </Button>
</form>

)
if (this.state.loading){
 form= <Spinner/>;

}

return (
    <div className={classes.ContactData}>
       <h4> enter your contact data</h4>

   {form}
    </div>



)


}


}

export default withRouter(ContactData);