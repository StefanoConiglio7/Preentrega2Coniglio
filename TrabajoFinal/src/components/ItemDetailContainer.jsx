import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"

const ItemDetailContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [error, setError] = useState(null)  
  const { id } = useParams()
  
  useEffect(() => {
    (async () => {
      try {
        const docRef = doc(db, "products", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setSelectedProduct({ ...docSnap.data(), id })
          setError(null)  
        } else {
          setError("El producto no existe.")  
        }
      } catch (error) {
        setError("Hubo un error al obtener el producto.")  
        console.error(error)
      }
    })()
  }, [id])

  return (
    <div>
      {error ? (
        <p>{error}</p> 
      ) : (
        selectedProduct && <ItemDetail product={selectedProduct} />
      )}
    </div>
  )
}

export default ItemDetailContainer
