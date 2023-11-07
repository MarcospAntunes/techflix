import React, { useState }  from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './pages/Inicio' ;
import Home from './pages/Home';
import Login from './pages/Login';
import Erro404 from './pages/Erro404';
import { lightTheme, darkTheme } from "./themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Favoritos from './pages/Favoritos';
import FavoritesProvider from './contexts/Favorites';
import useAuth from './hooks/useAuth';
import { AuthProvider } from './contexts/auth';
import Register from './pages/Registrar';

const Private = ({ Item, themeToggler }) => {
  const { signed } = useAuth()

  return signed > 0 ? <Item themeToggler={themeToggler} /> : <Login />
}

function Rotas() {
  const [theme, setTheme] = useState('dark')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <BrowserRouter>
          <FavoritesProvider>
            <GlobalStyle />
            <Routes>
              <Route path='/' element={<Inicio />}></Route>
              <Route path='/home' element={<Private Item={Home} themeToggler={themeToggler} />}></Route>
              <Route path='/registrar' element={<Register />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='*' element={<Erro404 />}></Route>
              <Route path='/meusFavoritos' element={<Private Item={Favoritos} themeToggler={themeToggler}/>}></Route>
            </Routes>
          </FavoritesProvider>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
    
    
  );
}

export default Rotas;