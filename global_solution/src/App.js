import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/PaginaInicial";
import FaleConosco from "./pages/Contato";
import Navbar from "./components/Navbar";

function App() {
  return (
   <div>
    <header></header>
    <section></section>
    <footer></footer>
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/faleconosco" element={<FaleConosco/>}></Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
