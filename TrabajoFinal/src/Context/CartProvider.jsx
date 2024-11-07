import { createContext, useContext, useState } from "react"

export const Cart= createContext()

const CartProvider= ({children})=>{
    const [cart,setcart]=useState([])
    const[quantity,setquantity]= useState(0)
    const addcart= (product,productquantity)=>{
        const productincart= IsinCart(product.id)
        let cartupdate=[...cart]
        if (productincart) {
            cartupdate=cart.map(cartproduct=>{
                if (cartproduct.id===product.id) {
                    return{
                        ...cartproduct,
                        quantity:cartproduct.quantity+productquantity
                    }
                }
                    return cartproduct
            })
        }else{
            cartupdate.push({...product,quantity:productquantity})
        }
        setcart(cartupdate)
    }
    const IsinCart= (productid)=>{
        return cart.some(cartproduct=>cartproduct.id===productid)
    }
    const removeFromCart = (productId) => {
        setcart(cart.filter(cartProduct => cartProduct.id !== productId))
      }
    return <Cart.Provider value={{cart,addcart,quantity,removeFromCart}}>{children}</Cart.Provider>

}
export default CartProvider