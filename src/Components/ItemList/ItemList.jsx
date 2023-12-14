import Item from "../Item/Item";
import classes from './ItemList.module.css'


const ItemList = ({products}) => {
    return (
        <div className={classes.listContainer}>
            {products.map(producto => { return <Item key = {producto.id} {...producto} />})}
        </div>
    );
};

export default ItemList