import React, { useState }  from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lightTheme, darkTheme } from "./themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { useAuth } from './hooks';
import { Erro404, Favoritos, Home, Inicio, Login, Register } from "./pages"
import { FavoritesProvider, CardDataProvider, AuthProvider } from './contexts'

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
            <CardDataProvider>
              <GlobalStyle />
              <Routes>
                <Route path='/' element={<Inicio />}></Route>
                <Route path='/registrar' element={<Register />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='*' element={<Erro404 />}></Route>
                <Route path='/home' element={<Private Item={Home} themeToggler={themeToggler} />}></Route>
                <Route path='/meusFavoritos' element={<Private Item={Favoritos} themeToggler={themeToggler}/>}></Route>
              </Routes>
            </CardDataProvider>
          </FavoritesProvider>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default Rotas;