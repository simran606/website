import React from 'react';
import '../css/republic.css';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Republic =(props) => {

    const history = useHistory();

       return(

            <div className="republicDiv" onClick={() => history.push('/items') }>

                  <div className="column" >
                      
                          <h3>{props.name}</h3>
                          <h5>{props.loca}</h5>
                          <p>{props.status}</p>
                          <p className="tob">{props.tob}</p>
                      
                  </div>

            </div>

      

        );
    }


export default withRouter(Republic);