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

function Rotas() {
  const [theme, setTheme] = useState('dark')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      
      <BrowserRouter>
          <FavoritesProvider>
            <GlobalStyle />
            <Routes>
              <Route path='/' element={<Inicio />}></Route>
              <Route path='/home' element={<Home themeToggler={themeToggler} />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='*' element={<Erro404 />}></Route>
              <Route path='/meusFavoritos' element={<Favoritos/>}></Route>
            </Routes>
          </FavoritesProvider>
          
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default Rotas;