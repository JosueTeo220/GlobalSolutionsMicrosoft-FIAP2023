import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/PaginaInicial';
import IaNoCombateAFome from './pages/IaNoCombateAFome';
import Navbar from './components/Navbar';
import AgriculturaSustentavel from './pages/AgriculturaSustentavel';
import Inseguranca from './pages/Inseguranca';
import Fatos from './pages/Fatos';
import './style/index.css'


function App() {
  const bg ={
    backgroundColor: 'white'
  }
  return (
   <div style={bg} className='scrollable-content'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/ia' element={<IaNoCombateAFome />}></Route>
        <Route path='/inseguranca' element={<Inseguranca />}></Route>
        <Route path='/fatos' element={<Fatos />}></Route>
        <Route path='/agricultura-sustentavel' element={<AgriculturaSustentavel />}></Route>
      </Routes>
      
    </Router>
  </div>
  );
}

export default App;
