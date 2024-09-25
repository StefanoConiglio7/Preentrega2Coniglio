import React from 'react'
import '../style/style.css'
import Hamburguesa from '../assets/hamburguesa.jpg'

function NavBar() {
  return (
    <ul className='ul'>
      <img src={Hamburguesa} alt="" />
      <li><a href="Inicio">Inicio</a></li>
      <li><a href="Menu">Menu</a></li>
      <li><a href="Locales">Locales</a></li>
      <li><a href="Contactanos">Contactanos</a></li>
    </ul>
  )
}

export default NavBar