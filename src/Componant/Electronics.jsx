import React from 'react';
import Cardselectric from './Cardselectric';

const Electronics = ({electric}) => {
    return (
        <div className='container  mt-4 '> 
        <div className='row '>

             {
                electric.map((electric)=>{
                    return <Cardselectric   electric={electric}  />   
                })
             }

        </div>
               
        </div>
    );
}

export default Electronics;
         
