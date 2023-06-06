import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/PaginaInicial';
import FaleConosco from './pages/Contato';
import Navbar from './components/Navbar';
import Inseguranca from './pages/Inseguranca';
import Fatos from './pages/Fatos';
import AgriculturaSustentavel from './pages/AgriculturaSustentavel';
import './index.css'


function App() {
  return (
   <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/faleconosco' element={<FaleConosco />}></Route>
        <Route path='/inseguranca' element={<Inseguranca />}></Route>
        <Route path='/fatos' element={<Fatos />}></Route>
        <Route path='/agricultura-sustentavel' element={<AgriculturaSustentavel />}></Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
