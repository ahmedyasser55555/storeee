import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
       <nav className="navbar navbar-expand-sm bg-success text-white  ">
  <div className="container">
    <Link className="navbar-brand text-white " to="/"><img src={require('../logo111.jpg')} width={50}  className='rounded-4'  alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav   ms-auto ">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="Choiesofcolors">choice of colors</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="Menclothing">men's clothing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="Womenclothing">clothies women</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="Jewelery">jewelery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="Electronics">Electronics</Link>
        </li>
        <li className="nav-item">
            <Link  className='btn btn-success  text-capitalize border-white  form-control-lg'  to='Buy' >buy</Link>             
             </li>
      </ul>
    </div>
    </div>
    </nav>

     
    </div>
       
    );
}

export default Navbar;
