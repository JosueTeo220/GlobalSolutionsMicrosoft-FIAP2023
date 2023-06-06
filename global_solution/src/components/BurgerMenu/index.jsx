import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./burger.css";
export default function Burger() {
  return (
    <div className="burgerContainer">
      <Menu right>
        <Link id="home" className="bm-item-list" to="/">
          Inicio
        </Link>
        <Link id="about" className="bm-item-list" to="/faleconosco">
          Fale Conosco
        </Link>
        <Link id="contact" className="bm-item-list" to="/fatos">
          Fatos
        </Link>
        <Link id="contact" className="bm-item-list" to="/inseguranca">
          Insegurança
        </Link>
        <Link
          id="contact"
          className="bm-item-list"
          to="/agricultura-sustentavel"
        >
          Agricultura Sustentavel
        </Link>
      </Menu>
    </div>
  );
}
