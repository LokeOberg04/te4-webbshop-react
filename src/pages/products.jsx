import ProductCard from '../components/productCard'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

function Products() {

    const [data, setData] = useState([])
    const { id } = useParams();

    async function fetchData() {
        if (id != undefined) {
            await fetch('http://localhost:3000/category/' + id)
                .then(res => res.json())
                .then(result => {
                    setData(result.data)
                    console.log(result.data)
                }).catch(err => {
                    console.log(err)
                })
        } else {
            await fetch('http://localhost:3000')
                .then(res => res.json())
                .then(result => {
                    setData(result.data)
                    console.log(result.data)
                }).catch(err => {
                    console.log(err)
                })
        }
    }
    useEffect(() => {
        fetchData()
        console.log(data)
    }, [])

    return (
        <main>
            <section className="info">
                <img src="../kitten.png" alt="" width="300px" />
                <div>
                    <h1>Produkter till katter och kattägare</h1>
                    <p>Här finns allt som behövs för katter och kattägare, vi har allt från drip till sängar</p>
                </div>
            </section>
            <section>
                <h1 className="centerText">produkter för Katter</h1>
                <div id="produkter" className="produkter">
                    {data.map((item) => (
                        < ProductCard
                            key={item.id}
                            id={item.id}
                            image={"../" + item.image}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </div>
            </section>
        </main>
    )

}

export default Products