import React from 'react';
import addCards from './addCards';
import AddItems from './addItems';

class CartWork extends React.Component{
 
        state = {
            cart:[]
        };
       
    findProductIndex = (cart,productID) => {
        return (cart.findIndex((item) => item.id === productID ));
       };
   
    UpdateProductUnits (product, cart){
   
           const extprIn = this.findProductIndex(cart, product.id) ;
   
           if(extprIn.length >= 0){   
              const updatedPrs = [...cart];   
               const extpr = updatedPrs[extprIn];   
               const updatedUnitspr = {
                   ...extpr,
                   units: extpr.units + product.units
               };   
               updatedPrs[extprIn] = updatedUnitspr;   
               return updatedPrs;
           }}

    addToCart = (product) => {

        const {cart} = this.state;
        const  extprIn = this.findProductIndex(cart, product.id) ;

        this.setState({
            cart:extprIn >= 0 ? this.UpdateProductUnits(cart,product) : [...cart, product]
        });
    };


    render(){
        return(
            addCards.map( (item) => 
                <AddItems key={item.id} {...item} addFunc ={this.addToCart} />)
        );
    }
}

export default CartWork ;