import CartWidget from "../CartWidget/CartWidget"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import classes from "./NavBar.module.css"
const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <ItemListContainer greeting={'ZapaSport'} />
            <div className={classes.container}>
                <button className={classes.button}>Home</button>
                <button className={classes.button}>Products</button>
                <button className={classes.button}>About Us</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar