import React from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";
import favoritar from './favorito-desativado.png'
import desfavoritar from './favorito-ativo.png'
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ id, link, titulo, autor, categoria, assunto  }) {

    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = isFavorite ? desfavoritar : favoritar


    return (
        <motion.li className={styles.card}>
            <iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2>{titulo} </h2>
            <p>{categoria}</p>
            <p>{autor}</p>
            <img 
                src={icone}
                alt="IconeFav"
                className={styles.favorito}
                onClick={() => addFavorite({ id, link, titulo, autor, categoria, assunto })}
            />
            
        </motion.li>
    )
}


export default Card;