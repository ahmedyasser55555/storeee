import React from 'react';

const Cardselectric = ({electric}) => {
    return (
        <div className='col-md-3  py-4 ' >
        <div className='card p-2 m-2 py-3 text-center mt-4 ' >
            <img src={electric.image} alt="" />
            <h2> title : {electric.title}  </h2>
            <h2> category : {electric.category}   </h2>
            <h3> price : {electric.price}   </h3>
        </div>
        </div>
    );
}

export default Cardselectric;
