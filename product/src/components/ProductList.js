
import React from 'react'
import { Link } from '@reach/router';

export default props => {
    return (
        <div>
             <h1>All Products:</h1>
            {props.product.map((product, idx)=>{
                 
                return <p key={idx}><Link  to={"/"+ product._id} key={idx}>{product.title}</Link> <br></br> Price: {product.price}  <br></br>Description:{product.description}</p>
            })}
        </div>
    )
}