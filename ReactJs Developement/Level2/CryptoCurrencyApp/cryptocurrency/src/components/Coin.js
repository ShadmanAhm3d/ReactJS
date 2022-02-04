import React from 'react';



export const Coin = ({ name, price , icon , symbol}) => {

  return(
       <div className='coin'>
           <h1> Name: {name} </h1>
            <img src={icon} />

           <h3> PRice : {price}</h3>
           <h3> Symbool :{symbol}</h3>
  </div>
  );
  
};

