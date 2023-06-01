import React, {useState,useEffect}  from "react";
import Navbar from "./Componant/Navbar";
import Footer from "./Componant/Footer";
import Home from "./Componant/Home";
import Menclothing from "./Componant/Men clothing";
import Electronics  from "./Componant/Electronics";
import Womenclothing from "./Componant/Women clothing";
import ChoiceOfColors from "./Componant/Choice of colors";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Details from "./Componant/Details";
import Jewelery from "./Componant/Jewelery";
import Buy from "./Componant/Buy";

function App() {


  const[product,setproduct] = useState([])
  const[jewelery,setjewelery] = useState([])
  const[mens,setmens] = useState([])
  const[womens,setwomens] = useState([])
  const[electric,setelectric]=useState ([])
  

  
  const getproduct= async ()=>{
    const response= await axios.get(`https://fakestoreapi.com/products`)
    setproduct(response.data)
  }
  const getjewelery= async ()=>{
    const response= await axios.get(`https://fakestoreapi.com/products/category/jewelery`)
    setjewelery(response.data)
  }
  const getmens= async ()=>{
    const response= await axios.get(`https://fakestoreapi.com/products/category/men's%20clothing`)
    setmens(response.data)
  }
  const getwomens= async ()=>{
    const response= await axios.get(`https://fakestoreapi.com/products/category/women's%20clothing`)
    setwomens(response.data)
  }
  const getelectric= async ()=>{
    const response= await axios.get(`https://fakestoreapi.com/products/category/electronics`)
    setelectric(response.data)
  }

  useEffect(()=>{
    getproduct()
    getjewelery()
    getmens()
    getwomens()
    getelectric()
  
  },[])
  
  return (
    <div>
    <Navbar/>
 <Routes>
  <Route path="/"  element={ <Home product={product}   />  }  />
  <Route path="Menclothing"  element={ <Menclothing  mens={mens}    />  }  />
  <Route path="Womenclothing"  element={  <Womenclothing womens={womens}     />}  />
  <Route path="Electronics"  element={ <Electronics   electric={electric}     />}   />
  <Route path="jewelery"  element={ <Jewelery jewelery={jewelery}  />}  />
  <Route path='details/:id'  element={ <Details/>}  />
  <Route path='Buy'  element={ <Buy/>}  />
  
  <Route path="Choiesofcolors"  element={ <ChoiceOfColors/>  }    />
 </Routes>

 

    <Footer/>

</div>      
  );
}

export default App;
