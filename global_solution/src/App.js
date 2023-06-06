import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/PaginaInicial';
import FaleConosco from './pages/Contato';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' ></Route>
        <Route path='/'></Route>
        <Route path='/'></Route>
        <Route path='/'></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
