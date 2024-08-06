import styles from "./Card.module.css";
import { motion } from "framer-motion";
import { useCardData } from "../../hooks";

function Card({ id, link, titulo, autor, categoria, assunto, banner }) {
  const { setOpenModal, setClickedCard } = useCardData()

  const handleCardClick = () => {
    setClickedCard({id, link, titulo, autor, categoria, assunto, banner})
    setOpenModal(true)
  }

  return (
    <motion.li className={styles.card}>
      <img src={banner} alt={titulo} onClick={handleCardClick} className={styles.banner} />
    </motion.li>
  )
}


export default Card;