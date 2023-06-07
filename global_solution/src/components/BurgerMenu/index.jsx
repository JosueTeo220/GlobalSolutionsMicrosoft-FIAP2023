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

        <Link id="" className="bm-item-list" to="/fatos">
          Fatos da Fome
        </Link>

        <Link id="" className="bm-item-list" to="/inseguranca">
          Insegurança Alimentar
        </Link>
        <Link id="" className="bm-item-list" to="/agricultura-sustentavel">
          Agricultura Sustentável
        </Link>
        <Link id="" className="bm-item-list" to="/ia">
          AI no combate a Fome
        </Link>
      </Menu>
    </div>
  );
}
