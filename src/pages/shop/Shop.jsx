import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'
import './Shop.css'

export default function Shop() {
  return (
    <div className='shop'>
        <div className='shop__title'>
            <h1>Techno Shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product, key) => <Product key={key} data={product}/>)}
        </div>
    </div>
  )
}
