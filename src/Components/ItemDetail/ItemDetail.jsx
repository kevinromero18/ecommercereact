import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'


const ItemDetail = ({id, name, price, category, img, stock}) => {
    console.log(id);
    return (
        <div className={classes.card}>
            <img src={img} alt={name}/>
            <h4> {name} </h4>
            <p> ${price} </p>
            <p> {category} </p>
            <ItemCount initial={1} stock={stock} onAdd={(cantidad => console.log(cantidad))}/>
        </div>
    )
}

export default ItemDetail