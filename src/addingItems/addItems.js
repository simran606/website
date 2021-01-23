import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/addItems.css';

const AddItems =({imgsr,nop,units,price,mrp,addFunc}) => {

        return(

            <div className="additemsDiv">

                  <div className="row colum">
                      <div className="col-lg-6">
                          <img src={imgsr} alt="add-img" />
                      </div>
                      <div className="col-lg-6">
                          <h4>{nop}</h4>      
                          <p>{units} piece</p>
                          <h5>{price}<strike><sup>{mrp}</sup></strike></h5>
                          <Button onClick={() => addFunc({imgsr,nop,price,mrp, units: 1})} variant="secondary">
                          Add To Cart
                          </Button>
                          <Button variant="secondary">
                          Buy Now
                          </Button>
                      </div>        
                  </div>

            </div>

      

        );
}

export default AddItems;