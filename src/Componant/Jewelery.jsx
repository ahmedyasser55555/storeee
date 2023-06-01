import React from 'react';
import Cardsjewelery from './Cardsjewelery';


const Jewelery = ({jewelery}) => {

    return (
                <section  className='container' >
                    <div className="row">
                    {
                        jewelery.map((jewelery)=>{
                            return  <Cardsjewelery   jewelery={jewelery}   />
                        })
                    }
                    </div>
                </section>
    );
}

export default Jewelery;
