import React, { useContext } from 'react'
import { Cart as CartContext } from '../Context/CartProvider'
import CartItem from './CartItem'
import { NavLink } from 'react-router-dom'
import styles from '../style/cart.module.scss'
import endPurchase from '../Services/EndPurchase'

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext)
    
    return (
        <div className={styles.container}>
            {cart.length ? (
                <>
                    {cart.map((cartItem) => (
                        <CartItem item={cartItem} key={cartItem.id} removeFromCart={removeFromCart} />
                    ))}
                    <NavLink to={"/checkout"}><button onClick={() => endPurchase(cart)}>End purchase</button></NavLink> 
                </>
            ) : (
                <>
                    <h1>No hay productos</h1>
                    <NavLink to={"/"}>Volver al Inicio</NavLink>
                </>
            )}
        </div>
    )
}

export default Cart
