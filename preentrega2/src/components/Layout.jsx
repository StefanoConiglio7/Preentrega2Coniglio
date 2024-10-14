import NavBar from "./NavBar"
import style from '../style/layout.module.scss'
import Cart from "./Cart"
const Layout = ({ children }) => {
    return (
        <>
            <NavBar/>
            <Cart/>
            
            <div className = {style.maincontainer}>
                {children}
            </div>
        </>
    )
}

export default Layout