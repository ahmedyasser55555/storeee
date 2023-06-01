import React from 'react';

const Cardmens = ({mens}) => {
    return (
        <div className='col-md-3' >
        <div className='card p-2 m-2 mb-2 ' >
            <img src={mens.image} alt="" />
            <h2>title : {mens.title}</h2>
            <h2>category : {mens.category}</h2>
            <h2>price : {mens.price}</h2>
        </div>
        </div>
    );
}

export default Cardmens;
