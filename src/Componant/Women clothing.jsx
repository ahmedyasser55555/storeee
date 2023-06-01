import React from 'react';
import Cardwomens from './Cardwomens';

const WomenSClothing = ({womens}) => {
    return (
        <div className='container'>
            <div className='row'>
                {
                    womens.map((womens)=>{
                        return  <Cardwomens  womens={womens}  />
                    })
                }

            </div>
         
        </div>
    );
}

export default WomenSClothing;
