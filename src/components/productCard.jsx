import { CartContext } from "../components/cartContext";
import { useContext } from 'react'
import { Link } from 'react-router-dom';

function putInCart(props) {

    let oldQuantity = 1;

    let oldItem = JSON.parse(window.localStorage.getItem(props.name))


    if (oldItem !== null) {
        oldQuantity = oldItem.quantity + 1
    }

    let item = {
        image: props.image,
        name: props.name,
        description: props.description,
        price: props.price,
        quantity: oldQuantity,
    }

    window.localStorage.setItem(props.name, JSON.stringify(item))
}

function ProductCard(props) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="wProdukt">
            <a href={"/product/" + props.id} >
                <img src={props.image} alt="" />
            </a>
            <div className="produkt">
                <a href={"product/" + props.id} >
                    <b>{props.name}</b>
                    <p>{props.description}</p>
                    <p className="redText"> {props.price} kr</p>
                </a>
                <button onClick={() => addToCart(props)}>Lägg till i korg</button>
            </div>
        </div>
    )

}

export default ProductCard