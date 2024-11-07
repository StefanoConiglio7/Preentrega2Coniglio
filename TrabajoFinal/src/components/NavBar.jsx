import React from 'react'
import style from "../style/navbar.module.scss"
import Hamburguesa from '../assets/hamburguesa.jpg'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <ul className={style.ul}>
      <img src={Hamburguesa} alt="" />
      <li>
                    <NavLink
                        className={ ({ isActive }) => {
                            return isActive ? style.isActive : style.notActive
                        }}
                        to={"/"}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={ ({ isActive }) => {
                            return isActive ? style.isActive : style.notActive
                        }}
                        to={"/category/Hamburguesa"}
                    >
                        Hamburguesas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={ ({ isActive }) => {
                            return isActive ? style.isActive : style.notActive
                        }}
                        to={"/category/Lomo"}
                    >
                        Lomos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={ ({ isActive }) => {
                            return isActive ? style.isActive : style.notActive
                        }}
                        to={"/category/Pizza"}
                    >
                        Pizzas
                    </NavLink>
                </li>
    </ul>
  )
}

export default NavBar