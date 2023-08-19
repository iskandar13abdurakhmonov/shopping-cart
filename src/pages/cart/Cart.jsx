import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem';
import './Cart.css'

export default function Cart() {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product}/>
          }
        })}
      </div>

      <div className="checkout">
        <p className="subtotal">Subtotal: ${Number(totalAmount)}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

