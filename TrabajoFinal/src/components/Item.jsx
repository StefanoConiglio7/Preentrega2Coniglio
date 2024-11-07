import style from '../style/item.module.scss'
import { NavLink } from "react-router-dom"

const Item = ({item})=>{
    return(
        <div className={style.container}>
            <h1>{item.title}</h1>
            <img src={item.pictureurl}/>
            <span>{item.description}</span>
            <span>{item.price}</span>
            <NavLink to={`/detail/${item.id}`}>
                <button>Detail</button>
            </NavLink>
        </div>

    ) 
}
export default Item 