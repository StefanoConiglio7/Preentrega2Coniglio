import React, { useEffect, useState } from 'react'
import products from "../assets/mockData.json"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ()=>{
  const[product,setproduct]= useState()
  useEffect(()=>{
    setproduct(products)
  },[])
  return <ItemDetail product={product}/>
}
export default ItemDetailContainer