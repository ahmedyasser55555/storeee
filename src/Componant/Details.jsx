import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {  useParams  } from 'react-router-dom';

const Details = () => {
    const[product,setproduct] = useState([])
    const params=useParams()
    const getproduct= async ()=>{
        const response= await axios.get(`https://fakestoreapi.com/products/${params.id}`)
        setproduct(response.data)
      }
      useEffect(()=>{
        getproduct()
      })

     
    return (

      
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                   <div className="card py-3 text-center p-2 mt-3 m-2 " >
                   <img src={product.image}  className='w-75' alt="" />
                   </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3 py-4 mb-3 m-auto ">
                        <h2>  title :  {product.title} </h2>
                        <h2> category :  {product.category} </h2>
                        <h3> description :  {product.description} </h3>

                      
                </div>
                </div>
            </div>

            <div>
                
            </div>
           

         
        </div>

                


    );
}

export default Details;
