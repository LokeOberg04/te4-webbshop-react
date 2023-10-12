import CartCard from '../components/cartCard'
import { useState, useEffect } from 'react'

function Cart() {


    const [data, setData] = useState([])
    let [total, settotal] = useState(0);
    let totala = 0;

    async function fetchData() {
        await fetch('http://localhost:3000')
            .then(res => res.json())
            .then(result => {
                setData(result.data)
                console.log(result.data)
                totala = 0;
                result.data.map((item) => (
                    (JSON.parse(window.localStorage.getItem(item.name)) !== null) ? (
                        totala += (item.price * JSON.parse(window.localStorage.getItem(item.name)).quantity)
                    ) : (
                        console.log("hej")
                    )
                ))
                settotal(totala)
                console.log(total)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
        console.log(data)
    }, [total])


    return (
        <main>
            <section>
                <ul>
                    <li className="cartItem">
                        <div>
                            <p>Produkt</p>
                        </div>
                        <p>Kvantitet</p>
                        <p>Pris</p>
                    </li>
                    {data.map((item) => (
                        (JSON.parse(window.localStorage.getItem(item.name)) !== null) ? (
                            <li key={item.id}>
                                < CartCard
                                    image={item.image}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    quantity={JSON.parse(window.localStorage.getItem(item.name)).quantity}
                                />
                            </li>
                        ) : (
                            console.log("hej")
                        )
                    ))}
                </ul>
            </section>
            <section className="checkout">
                <p>Total: <b className="fontweight500">{total}</b> kr</p>
                <button className="boton" onClick={() => { window.localStorage.clear(); location.reload() }}>Betala</button>
            </section>
        </main>
    )

}

export default Cart