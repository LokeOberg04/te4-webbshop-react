import { useState, useEffect } from 'react'

function Homepage() {
    const [data, setData] = useState([])



    async function fetchData() {
        await fetch('http://localhost:3000')
            .then(res => res.json())
            .then(result => {
                setData(result.data)

            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <body>
                <div id="hem" className="hero">
                    <div className="heroContent">

                        <h1>
                            Ditt husdjur kräver drip för att klara sig!
                        </h1>
                        <p>
                            Vad är en hund utan sin drip?
                        </p>
                        <a href="#produkter">
                            <button className="boton">
                                Utforska produkter
                            </button>
                        </a>
                    </div>
                </div>
                <main>
                    <section id="produkter" className="produkter">
                        <a href="/products/3" className="produktShadow">
                            <div>
                                <img src="Smiling_Tan_Pomeranian.jpg" alt="" />
                                <b>Hund kläder</b>
                            </div>
                        </a>
                        <a href="/products/1" className="produktShadow">
                            <div>
                                <img src="white kitten.png" alt="" />
                                <b>Katt kläder</b>
                            </div>
                        </a>
                        <a href="/products/2" className="produktShadow">
                            <div>
                                <img src="igelkott.jpg" alt="" />
                                <b>Hattar</b>
                            </div>
                        </a>
                        <a href="/products/4" className="produktShadow">
                            <div>
                                <img src="kattleksak.jpg" alt="" />
                                <b>Utekläder</b>
                            </div>
                        </a>
                        <a href="/products/5" className="produktShadow">
                            <div>
                                <img src="hundMat.jpg" alt="" />
                                <b>Utkläddnad</b>
                            </div>
                        </a>
                        <a href="/products" className="produktShadow">
                            <div>
                                <img src="catFood.jpeg" alt="" />
                                <b>Övrigt</b>
                            </div>
                        </a>
                    </section>
                    <section>
                        <div className="mainFix1">
                            <p>Se våra <b>42</b> omdömen på</p>
                            <img src="trustPilot.png" alt="" className="mainFix2" />
                        </div>
                        <div className="reviews">
                            <div>
                                <img src="stars-5.svg" alt="" />
                                <p>
                                    &apos;Min hund har en otrolig mängd &apos;bitches&apos; nu, tack så mycket Prip för att ni har räddat min
                                    incel
                                    hund.&apos;
                                </p>
                                <p>
                                    - Glad kund
                                </p>
                            </div>

                            <div>
                                <img src="stars-5.svg" alt="" />
                                <p>
                                    &apos;Benim&apos;
                                </p>
                                <p>
                                    - Benim
                                </p>
                            </div>

                            <div>
                                <img src="stars-5.svg" alt="" />
                                <p>
                                    &apos;She was prolly thinking bout me. I was prolly thinking bout cheese.&apos;
                                </p>
                                <p>
                                    - Lil Peep
                                </p>
                            </div>

                            <div>
                                <img src="stars-5.svg" alt="" />
                                <p>
                                    &apos;De skjöt ihjäl min hund :/&apos;
                                </p>
                                <p>
                                    - lycklig kund
                                </p>
                            </div>

                            <div>
                                <img src="stars-1.svg" alt="" />
                                <p>
                                    &apos;Lever livet, staplar tår.&apos;
                                </p>
                                <p>
                                    - Ejden (kocken från Delicious pizza (mmmmm, gott))
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </>
    )
}

export default Homepage
