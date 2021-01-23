import React from 'react';
import Button from 'react-bootstrap/Button';

class ShopName extends React.Component{

    render(){
        return(
            <div>
            <div className = "shopName"> 
            <h2>Shivam Zari Center</h2>
            <p>Address : 38 B, Tulsi Bagh, Dayal Bagh- 282005</p>
            <h6>Phone : 8451369856</h6>
            <h6>Delivery Charges : ₹120</h6>
            </div>
            <Button  variant="primary" type="submit">
                           CHECK LOCATION
            </Button>
            </div>
        );
    }
}

export default ShopName;
