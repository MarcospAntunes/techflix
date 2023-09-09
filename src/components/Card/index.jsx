import styles from "./Card.module.css";

function Card({ link, titulo, autor, categoria, assunto  }) {
    return (
        <li className={styles.card}>
            <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2>{titulo}</h2>
            <p>{categoria}</p>
            <p>{autor}</p>
            
        </li>
    )
}


export default Card;