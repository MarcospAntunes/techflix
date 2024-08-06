import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.module.css'

function Nav() {
  return (
    <nav>
      <Link to={'/home'}>Início</Link>
      <a href="#Back-end">Back-end</a>
      <a href="#Mobile">Mobile</a>
      <a href="#Front-end">Front-end</a>
      <a href="#Game-Development">Game Development</a>
      <a href="#Data-Base">Data Base</a>
      <Link to={'/meusFavoritos'}>Meus Favoritos</Link>
    </nav>
  )
}

export default Nav