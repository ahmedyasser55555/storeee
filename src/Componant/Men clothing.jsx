import React from 'react';
import Cardmens from './Cardmens';

const MenSClothing = ({mens}) => {
    return (
        <div className='container'>
        <div className='row'>
           {
            mens.map((mens)=>{
                return <Cardmens mens={mens}    />
            })
           }

        </div>
        </div>
        
    );
}

export default MenSClothing;
