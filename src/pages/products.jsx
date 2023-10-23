import ProductCard from '../components/productCard'
import { useParams } from "react-router-dom"
import { CartContext } from "../components/cartContext";
import { useState, useEffect, useContext } from 'react'

function Products() {

    const [data, setData] = useState([])
    const [category, setCategory] = useState(0)
    const [categoryName, setCategoryName] = useState("alla")
    const { id } = useParams();

    async function fetchData() {
        if (id != undefined) {
            await fetch('http://localhost:3000/category/' + id)
                .then(res => res.json())
                .then(result => {
                    setCategory(1);
                    setCategoryName(result.data[0].name)

                    setData(result.data[0].items)

                }).catch(err => {
                    console.log(err)
                })
        } else {
            await fetch('http://localhost:3000')
                .then(res => res.json())
                .then(result => {
                    setCategory(0);
                    setData(result.data)

                }).catch(err => {
                    console.log(err)
                })
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main>
            <section className="info">
                <img src="../kitten.png" alt="" width="300px" />
                <div>
                    <h1>Produkter till {categoryName}</h1>
                    <p>Här finns allt som behövs för katter och kattägare, vi har allt från drip till sängar</p>
                </div>
            </section>
            <section>
                <h1 className="centerText">produkter för {categoryName}</h1>
                <div id="produkter" className="produkter">
                    {data.map((item) => (
                        (category == 0 ? (

                            < ProductCard
                                key={item.id}
                                id={item.id}
                                image={"../" + item.image}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                            />
                        ) : (
                            < ProductCard
                                key={item.item.id}
                                id={item.item.id}
                                image={"../" + item.item.image}
                                name={item.item.name}
                                description={item.item.description}
                                price={item.item.price}
                            />
                        ))
                    ))}
                </div>
            </section>
        </main>
    )

}

export default Products