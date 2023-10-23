import { CartContext } from "../components/cartContext";
import { useContext } from 'react'

function CartCard(props) {
    const { removeFromCart } = useContext(CartContext);

    return (
        <div className="cartItem">
            <div>
                <img src={props.image} className="px100" alt="" />
                <b>{props.name}</b>
            </div>
            <b>{props.quantity}</b>
            <p>{props.price} kr</p>
            <div>
                <button onClick={() => { removeFromCart(props) }}>Remove item</button>
            </div>
        </div>
    )

}

export default CartCard