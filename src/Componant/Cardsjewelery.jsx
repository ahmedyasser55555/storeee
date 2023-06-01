import React from 'react';

const Cardsjewelery = ({jewelery} ) => {
    return (
        <div  className='col-md-3'>
                    <div className="card p-2 m-2 text-center  "    >
                <img src={jewelery.image} className='mb-2'  alt="" />
                <h2>category: {jewelery.category} </h2>
                <h2> title : {jewelery.title}</h2>
                <h3>  price : {jewelery.price}</h3>
                        </div>
                    </div>
                  

    );
}

export default Cardsjewelery;
