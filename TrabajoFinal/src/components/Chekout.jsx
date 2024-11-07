import React, { useContext, useState } from "react"
import { Cart } from "../Context/CartProvider"
import { NavLink } from "react-router-dom"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/config"
import styles from "../style/checkout.module.scss"

const Checkout = () => {
    const { cart } = useContext(Cart)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const handleCheckout = async (e) => {
        e.preventDefault()

        if (!name || !email || !phone) {
            alert("Por favor complete todos los campos.")
            return
        }

        setIsSubmitting(true)

        try {
            const orderRef = await addDoc(collection(db, "orders"), {
                user: {
                    name,
                    email,
                    phone
                },
                products: cart,
                total: cart.reduce((acc, item) => acc + item.precio * item.quantity, 0),
                timestamp: serverTimestamp()
            })

            setOrderId(orderRef.id)
            alert("Compra realizada con éxito!")
        } catch (error) {
            console.error("Error al realizar la compra:", error)
            alert("Hubo un error al procesar tu compra.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className={styles.container}>
            <h1>Checkout</h1>

            <div className={styles.cartSummary}>
                <h2>Resumen de la compra</h2>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.title} x {item.quantity} - ${item.precio * item.quantity}
                        </li>
                    ))}
                </ul>
                <p><strong>Total: ${cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)}</strong></p>
            </div>

            <form onSubmit={handleCheckout} className={styles.checkoutForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Procesando..." : "Finalizar compra"}
                </button>
            </form>

            {orderId && (
                <div className={styles.orderConfirmation}>
                    <h2>¡Compra realizada con éxito!</h2>
                    <p>Tu ID de orden es: <strong>{orderId}</strong></p>
                </div>
            )}

            <NavLink to="/cart" className={styles.backToCart}>
                Volver al carrito
            </NavLink>
        </div>
    )
}

export default Checkout
