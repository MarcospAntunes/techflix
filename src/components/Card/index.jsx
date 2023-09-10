import styles from "./Card.module.css";
import { motion } from "framer-motion";

function Card({ link, titulo, autor, categoria, assunto  }) {
    return (
        <motion.li className={styles.card}>
            <iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2>{titulo}</h2>
            <p>{categoria}</p>
            <p>{autor}</p>
            
        </motion.li>
    )
}


export default Card;