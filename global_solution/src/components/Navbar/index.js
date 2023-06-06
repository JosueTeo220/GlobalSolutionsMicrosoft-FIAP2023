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
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
