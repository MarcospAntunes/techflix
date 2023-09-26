import React from "react";
import { useFavoriteContext } from "../../contexts/Favorites";
import ListaDeFavoritos from "../../components/ListaDeFavoritos";
import styles from './Favoritos.module.css'
import Botao from '../../components/Botao'
import { Link } from "react-router-dom";
import Header from "../../components/Header";


function Favoritos({ themeToggler }) {
    const {favorite} = useFavoriteContext()
    
    
    return (
        <>
            <Header themeToggler={themeToggler}/> 
            <section className={styles.sectionFavoritos}>
                {favorite.length === 0 ?
                    <h1>Você não possui favoritos!</h1> : <ListaDeFavoritos videos={favorite}/>}         
            </section>
        </>
        
    )
}

export default Favoritos