import { useEffect, useState } from "react";
import "./navbar.css";
import MenuLinks from "../MenuLinks";
import Burger from "../BurgerMenu";

function Navbar() {
  const [showComponent, setShowComponent] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 765) {
        setShowComponent(false);
      } else {
        setShowComponent(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar a largura da tela ao carregar a página

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {showComponent ? (
        <MenuLinks/>
      ) : (
        <Burger/>
      )}
    </div>
  );
}
export default Navbar;
