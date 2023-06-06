import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/PaginaInicial";
import FaleConosco from "./pages/Contato";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/faleconosco" element={<FaleConosco/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
