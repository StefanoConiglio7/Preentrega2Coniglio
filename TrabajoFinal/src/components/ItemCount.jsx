import React, { useState } from "react"
import styles from '../style/itemcount.module.scss'

const ItemCount = ({ initial = 1, addCart }) => {
    const [count, setCount] = useState(initial)

    const increment = () => setCount(count + 1)
    const decrement = () => {
        if (count > 1) setCount(count - 1)
    }

    return (
        <div className={styles.container}>
            <div className={styles.operators}>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <button 
                className={styles.addcart} 
                onClick={() => addCart(count)}
            >
                Add to cart
            </button>
        </div>
    )
}

export default ItemCount
