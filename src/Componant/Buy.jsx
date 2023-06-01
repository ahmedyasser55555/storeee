import React from 'react';
import { Link } from 'react-router-dom';


const Buy = () => {
    return (
            <div className="container">
         <div className="row">              
  <div className="col-6 py-3 ">
    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13653.14568684098!2d31.2282952!3d31.1850708!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sus!4v1679709150127!5m2!1sar!2sus" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </div>
  <div className="col-md-6  py-3 ">
    <h2 className='text-center'>welcome</h2>
        <form action=""  className='d-grid' >
            <input type="text"  placeholder='user name' />
            <br />
            <input type="password"  placeholder='password'  />
            <br />
            <input type="gmail"  placeholder='gmail'  />
            <br />
            <Link to="" className='btn btn-success'   > login </Link> 
        </form>
  </div>
  </div>

    
            </div>
   
    );
}

export default Buy;
