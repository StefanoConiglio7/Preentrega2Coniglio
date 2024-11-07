import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from "./components/ItemListContainer"
import Layout from "./components/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from './components/Cart'
import CartProvider from './Context/CartProvider'
import Checkout from './components/Chekout'
function App() {
  

  return (
    <CartProvider>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </Layout>
      </BrowserRouter>
    </CartProvider>
      
    
  )
}

export default App
