import styles from "./Card.module.css";
import { motion } from "framer-motion";
import ModalVideo from "./Modal";
import { useState } from "react";

function Card({ id, link, titulo, autor, categoria, assunto, banner }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <motion.li className={styles.card}>
                <img src={banner} alt={titulo} onClick={() => setIsOpen(true)} className={styles.banner} />
            </motion.li>

            <ModalVideo
                isOpen={isOpen}
                setIsOpen={() => setIsOpen(!isOpen)}
                id={id}
                link={link}
                titulo={titulo}
                autor={autor}
                categoria={categoria}
                assunto={assunto}
                banner={banner}
            />
        </>
    )
}


export default Card;