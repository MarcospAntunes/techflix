import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './pages/Inicio' ;
import Home from './pages/Home';
import Login from './pages/Login';
import Erro404 from './pages/Erro404';

function Rotas() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Erro404 />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default Rotas;
