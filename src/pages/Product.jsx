import React from 'react'
import './product.scss'
import Single from '../components/Single'
import { singleProduct } from '../data'

const Product = () => {
  
  //fetch data and send to Single Component


  return (
    <div className="product">
       <Single {...singleProduct} />
    </div>
  )
}

export default Product