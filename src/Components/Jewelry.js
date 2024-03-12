import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FaStar } from 'react-icons/fa';
import Card from 'react-bootstrap/Card'; 
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

export const Jewelry = () => {

    const dispatch = useDispatch();
    const [products,getproducts]=useState([]);
    useEffect(()=>{
       fetch('https://fakestoreapi.com/products/category/jewelery')
       .then(data=>data.json())
       .then(result=>getproducts(result))


    },[]);
    const addToCart =(product)=>{
        dispatch(add(product));
     }


    const temp= products.map(product=>(
        <div className="col-md-3" key={product.id} style={{marginBottom:"10px"}}> 
        <Card className='h-100'>
            <div className='text-center'>
           <Card.Img variant="top" src={product.image} style={{width:"100px",height:"130px"}} />
           </div>
           <Card.Body>
             <Card.Title>{product.title}</Card.Title>
             
             <Card.Title>INR {product.price}</Card.Title>
             <Card.Title> {product.rating.rate} <FaStar className='pb-1' style={{color:'green'}}/> | {product.rating.count }K  </Card.Title>
             
           </Card.Body >
           <Card.Footer className='text-center'><Button  variant="primary" onClick={()=>addToCart(product)}>AddTo Cart</Button></Card.Footer>
         </Card> 
         </div>

     ));
  return (
    <div className="row">
    {temp}
</div>

  )
}
