function CartCard(props) {


    return (
        <div className="cartItem">
            <div>
                <img src={props.image} className="px100" alt="" />
                <b>{props.name}</b>
            </div>
            <b>{props.quantity}</b>
            <p>{props.price} kr</p>
            <div>
                <button onClick={() => { window.localStorage.removeItem(props.name); location.reload() }}>Remove item</button>
            </div>
        </div>
    )

}

export default CartCard