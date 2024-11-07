import NavBar from "./NavBar"
import style from '../style/layout.module.scss'
import CartWidget from "./CartWidget"


const Layout = ({ children }) => {
    return (
        <>
            <NavBar/>
            <CartWidget/>
            
            <div className = {style.maincontainer}>
                {children}
            </div>
        </>
    )
}

export default Layout