import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css'
import Toolbar from'../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component  {
  state={

    showsidedrawer:true
  }
  sidedrawerclosehandler =()=>{

    this.setState({showsidedrawer:false})
  }
  
  toggleopenhandler=()=>{
    this.setState({showsidedrawer:true})
  }
  
  render(){

  return(
  
  <Aux>
    <Toolbar showtoggle={this.toggleopenhandler}/>
    <SideDrawer
         open={this.state.showsidedrawer}
         closed={this.sidedrawerclosehandler}

    />
      <main className={classes.Content}> 
       
       {this.props.children} 
 
      </main>
  </Aux>
)
}}
  
export default  Layout;