import '../../src/style.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function Contato() {
    return (
        <>
        <Header />
         <main>
        <section>
            <div id="contato-bg"><img src="./src/assets/img/img-contato-bg.jpg" alt="Contate-nos" /></div>
        </section>
        <div className="container-contato">
            <div className="titulo-principal-contato">
                <h1>Fale conosco</h1>
                <p>Estamos preparados para te atender, dúvidas, elogios ou sugestões. </p>
                <div id="line"></div>
            </div>
            <div className="formulario-contato">
                <form>
                    <input type="text" placeholder="Nº do pedido (caso tenha)"/>
                    <input type="text" placeholder="Nome completo"/>
                    <input type="text" placeholder="E-mail"/>
                    <textarea cols={30} rows={10} placeholder="Digite sua mensagem aqui"></textarea>
                    <input type="button" value="Enviar" id="form-button"/>
                </form>
            </div>
        </div>
         </main>
         <Footer />

        </>
    )
}