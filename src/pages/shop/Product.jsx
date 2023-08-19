import React, { useContext } from 'react'
import './Shop.css'
import { ShopContext } from '../../context/ShopContext'

export default function Product(props) {

    const {id, productName, productPrice, productImage} = props.data

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemsAmount = cartItems[id]

  return (
    <div className="product">
        <img src={productImage} alt={productName} />
        <div className="description">
            <p>
                {productName}
            </p>
            <p>
                ${productPrice}
            </p>
            <button className="addToCartBtn" onClick={() => addToCart(id)}>
                Add To Cart
                {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
            </button>
        </div>
    </div>
  )
}
