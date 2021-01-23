import React from 'react';
import Republic from './Republic';
import republicCards from './republicCard';
import NavMenuShop from './NavMenuShop';
import Footer from '../Components/footer';
import { withRouter } from 'react-router-dom';

const Shop =() => {

        return(
            <div>
               <NavMenuShop />

               {republicCards.map( (item) => 
               <Republic 
               name={item.name}
               loca={item.location}
               status={item.status}
               tob={item.tob}
               />
               )
               }

               <Footer />
            </div>
        );
    }


export default withRouter(Shop);