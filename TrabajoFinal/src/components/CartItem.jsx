import styles from '../style/cartItem.module.scss'
const CartItem= ({item,removeFromCart})=>{
    return (
        <div className={styles.cartItem} >
            <img src={item.pictureurl} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
        </div>
    )
}
export default CartItem