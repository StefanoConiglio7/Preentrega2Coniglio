import ItemList from "./ItemList";
import mockProducts from "../assets/mockData.json"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer= ()=>{
    const [products,setproducts]= useState([])
    const {categoryId}=useParams()
     
    useEffect(()=>{
        let productsFiltered
        if (categoryId) {
            productsFiltered= mockProducts.filter(product=>product.category===categoryId )
        }else{
            productsFiltered=mockProducts
        }
        setTimeout(() => {
            setproducts(productsFiltered)
        }, 2500);
        
    },[categoryId])

    return <ItemList products={products}/>
}
export default ItemListContainer