import { useState, useEffect } from 'react'

function Homepage() {
    const [data, setData] = useState([])

    async function fetchData() {
        await fetch('http://localhost:3000')
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
                        <a href="/products">
                            <div>
                                <img src="Smiling_Tan_Pomeranian.jpg" alt="" />
                                <b>Hund kläder</b>
                            </div>
                        </a>
                        <a href="/products">
                            <div>
                                <img src="white kitten.png" alt="" />
                                <b>Katt kläder</b>
                            </div>
                        </a>
                        <a href="/products">
                            <div>
                                <img src="igelkott.jpg" alt="" />
                                <b>Hund leksaker</b>
                            </div>
                        </a>
                        <a href="/products">
                            <div>
                                <img src="kattleksak.jpg" alt="" />
                                <b>Katt leksaker</b>
                            </div>
                        </a>
                        <a href="/products">
                            <div>
                                <img src="hundMat.jpg" alt="" />
                                <b>Hund mat</b>
                            </div>
                        </a>
                        <a href="/products">
                            <div>
                                <img src="catFood.jpeg" alt="" />
                                <b>Katt mat</b>
                            </div>
                        </a>
                        <a href="/products">
                            <div>
                                <img src="everClean.jpg" alt="" />
                                <b>Övrigt</b>
                            </div>
                        </a>
                    </section>
                    <section>
                        <div className="mainFix1">
                            <p>Se våra <b>4</b> omdömen på</p>
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
                                    &apos;Livin life, Stackin tear.&apos;
                                </p>
                                <p>
                                    - Ejden
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
                        </div>
                    </section>
                </main>
            </body>
        </>
    )
}

export default Homepage
