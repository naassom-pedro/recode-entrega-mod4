import { Header } from "../components/Header"
import '../../src/style.css'
import { Footer } from "../components/Footer"

export function Promocoes() {
    return (
        <>
            <Header />
            <main>
            <div className="titulo-principal">
            <h1>Aqui o desconto é o ano todo!</h1>
            <p>Preparamos os melhores descontos para você, confere e pegue já o seu.</p>
            <div id="line"></div>
        </div>


        <div className="card-desconto" id="card1">
            <div className="div1">
                <h1>10%</h1>
            </div>
            <div className="div2">
                <h1>Novos Clientes</h1>
                <h2>É novo aqui?, ganhe 10%</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem omnis accusantium ab cupiditate
                    facere sapien.</p>
                <div className="action">
                    <button>Eu quero</button>
                    <h2>válido até: 12/12/2021</h2>
                </div>

            </div>
        </div>

        <div className="card-desconto">
            <div className="div1">
                <h1>5%</h1>
            </div>
            <div className="div2">
                <h1>Primeira compra</h1>
                <h2>Faça sua primeira compra</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem omnis accusantium ab cupiditate
                    facere sapien.</p>
                <div className="action">
                    <button>Eu quero</button>
                    <h2>válido até: 12/12/2021</h2>
                </div>

            </div>
        </div>

        <div className="card-desconto">
            <div className="div1">
                <h1>15%</h1>
            </div>
            <div className="div2">
                <h1>Passagens Duo</h1>
                <h2>Leve 15% de desconto.</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem omnis accusantium ab cupiditate
                    facere sapien.</p>
                <div className="action">
                    <button>Eu quero</button>
                    <h2>válido até: 12/12/2021</h2>
                </div>
            </div>
        </div>
        </main>
        <Footer />
        </>
    )
}