import React,{Component} from 'react'
import classes from './modal.module.css';
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'


class Modal extends  Component {

  shouldComponentUpdate( nextProps , nextState ) {

    return nextProps.show !== this.props.show ||  nextProps.children !== this.props.children;
  }
  
  componentWillUpdate(){

    console.log('[Modal] will update');
  }
  
  render(){
return(



<Aux>
  <Backdrop show={this.props.show}
            clicked={this.props.modalclosed}

  />
    <div className={classes.Modal}
        
 
       
   style={{
    transform:this.props.show?'transformY(0)':'transformY(-100vh)',
       opacity:this.props.show ?'1':'0'
   }}
      
    
    
    >
   
    
    {this.props.children}
       
    
    </div>
    </Aux>




)



}





}



export default Modal;