import React from "react";
import { useFavoriteContext } from "../../contexts/Favorites";
import ListaDeFavoritos from "../../components/ListaDeFavoritos";
import styles from './Favoritos.module.css'
import Botao from '../../components/Botao'
import { Link } from "react-router-dom";


function Favoritos() {
    const {favorite} = useFavoriteContext()
    
    
    return (
        <>  
        <section className={styles.sectionFavoritos}>
            {favorite.length === 0 ?
                <h1>Você não possui favoritos!</h1> : <ListaDeFavoritos videos={favorite}/>}
            <Botao><Link style={{color: 'black'}} to={'/home'}>Voltar</Link></Botao>
        </section>
        
        </>
        
    )
}

export default Favoritos