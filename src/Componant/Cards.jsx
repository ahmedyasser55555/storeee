import React from 'react';
import { Link } from 'react-router-dom';


const Cards = ({product}) => {
    return (
                   <div className="col-md-3">
                    <div className="card  text-center p-2 m-2">     
                          <img src={product.image} width={200} className=' m-auto  '  alt="" />
                          <h2>title : {product.title}   </h2>
                          <h3>price : {product.price} </h3>
                          
                          <Link className='btn btn-success m-2 form-control-lg' to={`details/${product.id}`} > details </Link>

                    </div>
                </div>
              
    );
}

export default Cards;
