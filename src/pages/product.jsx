import ProductCard from '../components/productCard'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

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

function Product() {

    const [data, setData] = useState([])
    const { id } = useParams();

    async function fetchData() {
        await fetch('http://localhost:3000/product/' + id)
            .then(res => res.json())
            .then(result => {
                setData(result.data)
                console.log(result.data)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
        console.log(data)
    }, [])

    return (
        <main>
            {data.map((item) => (
                <section key={item.id} className="oneProdukt">
                    <img src={"../" + item.image} alt="" width="300px" />
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                    </div>
                    <div className="productButtonDiv">
                        <button className="productButton boton" onClick={() => putInCart(item)}>Lägg till i korg</button>
                    </div>
                </section>
            ))}
        </main>
    )

}

export default Product