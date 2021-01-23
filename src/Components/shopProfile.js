import React from 'react' ;
import '../css/shopProfile.css';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function ShopProfile(){

    const history = useHistory();

    return(
        <div className="shopDiv">
            <div className="row">
                <div className="col-lg-3" onClick={() => history.push('/shops') }>
                <div>
                    <img alt="shop-img" src="../../Images/indianflag.png"  />
                    <h4>Republic Day Special</h4>
                    </div>
                </div>
                <div className="col-lg-3">
                <div>
                    <img alt="shop-img" src="../../Images/grocery.png" />
                    <h4>Groceries & Essential</h4>
                    </div>
                </div>
                <div className="col-lg-3">
                <div>
                    <img alt="shop-img" src="../../Images/cheeseburger.png" />
                    <h4>Food Outlets & Restaurant</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                <div>
                    <img alt="shop-img" src="../../Images/fruits.png" />
                    <h4>Fruits & Veggies</h4>
                    </div>
                </div>
                <div className="col-lg-3">
                <div>
                    <img alt="shop-img" src="../../Images/dairy.png" />
                    <h4>Dairy Products</h4>
                    </div>
                </div>
                <div className="col-lg-3">
                <div>
                    <img alt="shop-img" src="../../Images/art.png" />
                    <h4>Art & Craft</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                <div>
                    <img alt="shop-img" src="../../Images/stationary.png" />
                    <h4>Stationary</h4>
                    </div>
                </div>
                <div className="col-lg-3">
                <div>
                    <img alt="shop-img" src="../../Images/fashion.png" />
                    <h4>Fashion</h4>
                    </div>
                </div>
                <div className="col-lg-3">
                <div>
                    <img alt="shop-img" src="../../Images/personal care.png" />
                    <h4>Personal Care</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ShopProfile);
