import React, { useState, useContext } from "react"
import ItemCount from "./ItemCount"
import { Cart } from "../Context/CartProvider"
import { NavLink } from "react-router-dom"

const ItemDetail = ({ product }) => {
    const { addcart } = useContext(Cart)
    const [itemCountVisibility, setItemCountVisibility] = useState(true)

    const handleCart = (quantity) => {
        setItemCountVisibility(false)
        addcart(product, quantity)
    };

    return (
        <div>
            <img src={product.pictureurl} style={{ width: 300 }} alt={product.title} />
            <h1>{product.title}</h1>
            <span>{product.description}</span>
            {itemCountVisibility ? (
                <ItemCount initial={1} addCart={handleCart} />
            ) : (
                <button>
                    <NavLink to={'/cart'}>Go to cart</NavLink>
                </button>
            )}
        </div>
    )
}

export default ItemDetail
