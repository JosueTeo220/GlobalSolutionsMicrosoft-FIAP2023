import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./burger.css";
export default function Burger() {
  return (
    <div className="burgerContainer">
      <div className="menu-brand-container">
        <Link id="menu-brand" to="/">
          {" "}
          Global Solution 2023
        </Link>
      </div>
      <Menu right>
        <div className="containerLinks">
          <Link className="bm-item-list" to="/">
            Inicio
          </Link>
        </div>
        <div className="containerLinks">
          <Link id="" className="bm-item-list" to="/faleconosco">
            Fale Conosco
          </Link>
        </div>

        <div className="containerLinks">
          <Link id="" className="bm-item-list" to="/fatos">
            Fatos
          </Link>
        </div>

        <div className="containerLinks">
          <Link id="" className="bm-item-list" to="/inseguranca">
            Insegurança
          </Link>
        </div>

        <div className="containerLinks">
          <Link id="" className="bm-item-list" to="/agricultura-sustentavel">
            Agricultura Sustentavel
          </Link>
        </div>
      </Menu>
    </div>
  );
}
