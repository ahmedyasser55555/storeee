import React from 'react';

const Cardwomens = ({womens}) => {
    return (
        <div className='col-md-3'>
            <div className="card p-2 m-2 text-center py-3  ">
                <img src={womens.image} alt="" />
                <h2> title : {womens.title}  </h2>
                <h2> category : {womens.category}  </h2>
                <h2> price : {womens.price}  </h2>

            </div>
            
        </div>
    );
}

export default Cardwomens;
