import { useEffect, useState } from "react"
import classes from "./ItemListContainer.module.css"
import { getProducts, getProductsByCategory } from "../../asyncMocks"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {setProducts(response)})
            .catch(error => {console.error(error)})
    }, [categoryId])
    return (
        <div>
            <h2 className={classes.greet}>{greeting}</h2>
            <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer