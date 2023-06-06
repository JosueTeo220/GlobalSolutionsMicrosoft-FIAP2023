import {useResizeHandler} from "../../script";
import MenuLinks from "../MenuLinks";
import Burger from "../BurgerMenu";
function Navbar() {
  const showComponent = useResizeHandler();
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
