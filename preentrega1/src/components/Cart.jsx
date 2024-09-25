import React from 'react'
import Cart from '../assets/cart.svg'

const cart =() => {
  return (
    <>
      <img src={Cart} alt='carrito' style={{width:50}}/>
      <span>(4)</span>
    </>
    
  )
}

export default cart