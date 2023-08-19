import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Product from '../shop/Product'

export default function CartItem(props) {

    const {id, productName, productPrice, productImage} = props.data

    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={productImage} alt={productName} />
        <div className="description">
            <p>
                {productName}
            </p>
            <p>
                ${productPrice}
            </p>
            <div className="cartHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
