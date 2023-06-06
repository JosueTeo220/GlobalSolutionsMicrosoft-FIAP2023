import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./burger.css";
export default function Burger() {
  return (
    <div className="burgerContainer">
      <div className="menu-brand-container">
        <Link id="menu-brand" to="/">
          Global Solution 2023
        </Link>
      </div>
      <Menu right>
        <Link className="bm-item-list" to="/">
          Inicio
        </Link>

        <Link id="" className="bm-item-list" to="/faleconosco">
          Fale Conosco
        </Link>

        <Link id="" className="bm-item-list" to="/fatos">
          Fatos
        </Link>

        <Link id="" className="bm-item-list" to="/inseguranca">
          Insegurança
        </Link>

        <Link id="" className="bm-item-list" to="/agricultura-sustentavel">
          Agricultura Sustentavel
        </Link>
      </Menu>
    </div>
  );
}
