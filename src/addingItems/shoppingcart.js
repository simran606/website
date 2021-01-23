import React from 'react';
import '../css/addItems.css';
import NavMenuCart from './NavMenuCart';
import Footer from '../Components/footer';
import addCards from './addCards';
import CartWork from './cartWorking';
import ShopName from './shopName';
import { withRouter } from 'react-router-dom';

class ShoppingCart extends React.Component{

    render(){
        return(
            <div>
            <NavMenuCart />

            <div className="cartDiv"> 
            <h1>Your Cart</h1>
            {/* <ul>
                {
                    this.state.cart.map(c => <li>{c.nop} <br></br> units : {c.units}</li>) 
                }
            </ul> */}
            </div>

            <ShopName />
            <CartWork product={addCards} />
            <Footer />

            </div>
        );
    }
}

export default withRouter(ShoppingCart) ;