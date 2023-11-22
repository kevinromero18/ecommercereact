import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classes from "./CartWidget.module.css"
const CartWidget = () => {
    return (
        <div className={classes.container}>
            <FontAwesomeIcon className={classes.cartShopping} icon={faCartShopping} />
        </div>
    )
}

export default CartWidget