import '../../src/style.css'
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';


export function Destinos() {
    return (
        <>
            <Header />
        <main>
            <div className="titulo-principal">
                <h1>Nossos destinos preferidos</h1>
                <p>Selecionamos os melhores lugares para você curtir e relaxar agora mesmo.</p>
                <div id="line"></div>
            </div>
        

            <div className="card-section">
                <div className="card-destino">
                    <img src="./src/assets/img/img-frança.jpg" alt="" />
                </div>
                <div className="card-detalhes">
                    <h1 id="title">Paris, França</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illo fugiat ipsum sed quaerat
                        suscipit, eaque inventore. Tempore tenetur libero qui voluptatibus aut ad saepe iste aliquid
                        modi, rerum sequi?</p>
                    <div className="card-destino-action">
                        <h1>De R$ 3.500</h1>
                        <h1>Por 2.380</h1>
                        <button>Comprar agora</button>
                    </div>
                </div>
            </div>
        
            <div className="card-section" id="card1">
                    <div className="card-destino">
                        <img src="./src/assets/img/london.jpg" />
                    </div>
                    <div className="card-detalhes">
                        <h1 id="title">Londres, Inglaterra</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illo fugiat ipsum sed quaerat
                            suscipit, eaque inventore. Tempore tenetur libero qui voluptatibus aut ad saepe iste aliquid
                            modi, rerum sequi?</p>
                        <div className="card-destino-action">
                            <h1>De R$ 3.500</h1>
                            <h1>Por 2.380</h1>
                            <button>Comprar agora</button>
                        </div>
                    </div>
                </div>
            
                <div className="card-section">
                    <div className="card-destino">
                        <img src="./src/assets/img/venezia.jpg" alt="" />
                    </div>
                    <div className="card-detalhes">
                        <h1 id="title">Veneza, Italia</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illo fugiat ipsum sed quaerat
                            suscipit, eaque inventore. Tempore tenetur libero qui voluptatibus aut ad saepe iste aliquid
                            modi, rerum sequi?</p>
                        <div className="card-destino-action">
                            <h1>De R$ 3.500</h1>
                            <h1>Por 2.380</h1>
                            <button>Comprar agora</button>
                        </div>
                    </div>
                </div>


                <div className="card-section">
                    <div className="card-destino">
                        <img src="./src/assets/img/saopaulo.jpg" />
                    </div>
                    <div className="card-detalhes">
                        <h1 id="title">São Paulo, Brasil</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illo fugiat ipsum sed quaerat
                            suscipit, eaque inventore. Tempore tenetur libero qui voluptatibus aut ad saepe iste aliquid
                            modi, rerum sequi?</p>
                        <div className="card-destino-action">
                            <h1>De R$ 3.500</h1>
                            <h1>Por 2.380</h1>
                            <button>Comprar agora</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            
            </>

            
    );
}