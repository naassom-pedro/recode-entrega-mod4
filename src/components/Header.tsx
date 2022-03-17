import '../../src/style.css'
import { Link } from 'react-router-dom';
import { AppRoutes } from '../Routes';

export function Header(){
    return (
        <header>
             <div className="logo">
                 <h1>Viajou 2.0</h1>
             </div>
            <nav>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/destinos">destino</Link></li>
                    <li><Link to="/promocoes">promoções</Link></li>
                    <li><Link to="/contato">contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}