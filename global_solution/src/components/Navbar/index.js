import { Link } from "react-router-dom"

function Navbar(){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="../../pages/PaginaInicial.jsx">Inicio</Link>
                    </li>
                    <li>
                        <Link to="../../pages/Fatos.jsx">Fale Conosco</Link>
                    </li>
                    <li>
                        <Link to="../../pages/Fatos.jsx">Fale Conosco</Link>
                    </li>
                    <li>
                        <Link to="../../pages/Fatos.jsx">Fale Conosco</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar