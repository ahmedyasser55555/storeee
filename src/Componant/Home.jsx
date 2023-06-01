import React from 'react';
import Cards from './Cards';


const Home = ({product}) => {

    return (
        <div className='container'>
        <div className='row'>
                    
            {
                product.map((product)=>{
                    return       <Cards   product={product}   />
                })
            }


        </div>
        </div>
    );
}

export default Home;
