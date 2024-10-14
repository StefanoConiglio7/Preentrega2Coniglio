import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from "./components/ItemListContainer"
import Layout from "./components/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </Layout>
      </BrowserRouter>
  
      
    </>
  )
}

export default App
