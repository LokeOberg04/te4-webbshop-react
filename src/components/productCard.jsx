function putInCart(props) {

    let oldQuantity = 1;

    let oldItem = JSON.parse(window.localStorage.getItem(props.name))
    console.log(oldItem)

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
    console.log(item)
    window.localStorage.setItem(props.name, JSON.stringify(item))
}

function ProductCard(props) {

    return (
        <div>
            <img src={props.image} alt="" />
            <div className="produkt">
                <b>{props.name}</b>
                <p>{props.description}</p>
                <p className="redText"> {props.price} kr</p>
                <button onClick={() => putInCart(props)}>Lägg till i korg</button>
            </div>
        </div>
    )

}

export default ProductCard