import CartCard from '../components/cartCard'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from "../components/cartContext";

function Cart() {

    const cart = useContext(CartContext);
    const { removeFromCart } = useContext(CartContext);

    console.log(cart.cart)

    const [data, setData] = useState([])
    let [total, settotal] = useState(0);
    let totala = 0;

    // async function fetchData() {
    //     await fetch('http://localhost:3000')
    //         .then(res => res.json())
    //         .then(result => {
    //             setData(result.data)

    //             totala = 0;
    //             result.data.map((item) => (
    //                 (JSON.parse(window.localStorage.getItem(item.name)) !== null) ? (
    //                     totala += (item.price * JSON.parse(window.localStorage.getItem(item.name)).quantity)
    //                 ) : (
    //                     null
    //                 )
    //             ))
    //             settotal(totala)

    //         }).catch(err => {
    //             console.log(err)
    //         })
    // }
    // useEffect(() => {
    //     fetchData()

    // }, [total])


    return (
        <main>
            <section>
                <ul className="cartUl">
                    <li className="cartItem">
                        <div>
                            <p>Produkt</p>
                        </div>
                        <p>Kvantitet</p>
                        <p>Pris</p>
                    </li>
                    {cart.cart.map((item, index) => (
                        <li key={index}>
                            < CartCard
                                image={item.image}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        </li>
                    )
                    )}
                    <section className="checkout">
                        <p>Total: <b className="fontweight500">{total}</b> kr</p>
                        <button onClick={() => { removeFromCart(...cart); location.reload() }}>Betala</button>
                    </section>
                </ul>
            </section>
        </main>
    )

}

export default Cart