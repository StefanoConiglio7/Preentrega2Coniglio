import Item from "./item";
import style from '../style/itemlist.module.scss'
const ItemList = ({products})=>{
    return(
        <div className={style.container}>
            {products.map((product)=>{
                return(
                    <Item product={product} key={product.id}/>
                )
            } )}
        </div>
    )
}
export default ItemList