import { Link } from "react-router-dom";
import "./MenuLinks.style.css";
export default function MenuLinks() {
  return (
    <div>
        <div className="nav-brand-container">
          <Link to="/" className="brand-text">Global Solution 2023</Link>
        </div>
      <div className="main-container">
        <nav>
          <ul className="list-menu">
            <li>
              <Link to="/fatos">Fatos da fome</Link>
            </li>
            <li>
              <Link to="/inseguranca">Insegurança Alimentar</Link>
            </li>
            <li>
              <Link to="/agricultura-sustentavel">Agricultura Sustentavel</Link>
            </li>
            <li>
              <Link to="/faleconosco">Fale Conosco</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
