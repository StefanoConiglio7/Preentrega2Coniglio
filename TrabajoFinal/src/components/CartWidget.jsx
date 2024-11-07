import React, { useContext } from 'react'
import { Cart } from '../Context/CartProvider' 
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
 
  const { cart } = useContext(Cart);

  
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
        <NavLink to="/cart">
            <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="cart" style={{ width: 40 }} />
        </NavLink>
        <span>({totalQuantity})</span> 
    </>
  )
}

export default CartWidget
