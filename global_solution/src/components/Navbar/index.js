import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/faleconosco">Fale Conosco</Link>
          </li>
          <li>
            <Link to="/fatos">Fatos</Link>
          </li>
          <li>
            <Link to="/inseguranca">Insegurança</Link>
          </li>
          <li>
            <Link to="/agricultura-sustentavel">Agricultura Sustentavel</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
