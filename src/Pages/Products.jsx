import React ,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

import './Products.css'
const Products = () => {
  const [products, setProducts] = useState([]);
    useEffect(()=>{
      getAllProducts()          
    },[])

    const getAllProducts=()=>{
      fetch('http://localhost:3000/products')
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setProducts(data)
            })
    }

    const deleteProduct=(product)=>{
      Swal.fire({
        title:`Are You sure To Delete ${product.title}?`,
        showCancelButton:true
      }).then(data=>{
        if(data.isConfirmed){
          fetch(`http://localhost:3000/products/${product.id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>console.log(data)) 
          getAllProducts()
        }
      } 
     
)    }
  return (
    <>
      
      <Link to={"/products/add"}  className='btn btn-success mt-3'>Add new product </Link>
      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">title</th>
            {/* <th scope="col">Description</th> */}
            <th scope="col">price</th>
            <th scope="col">oprations</th>
          </tr>
        </thead>
        <tbody>
            {products.map((product )=>{
                return ( <tr>
                    <th scope="row">{product.id}</th>
                    <td>{product.title.slice(0,20)}...</td>
                    {/* <td>{product.description.slice(0,20)}...</td> */}
                    <td>{product.price}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={()=>deleteProduct(product)}>Delete</button>
                      <Link  to={`/products/${product.id}`} className="btn btn-info btn-sm">View</Link>
                      <button className="btn btn-primary btn-sm">Edit</button>
                    </td>
                  </tr>)
            })}
         
         
        </tbody>
      </table>
    </>
  );
};

export default Products;
