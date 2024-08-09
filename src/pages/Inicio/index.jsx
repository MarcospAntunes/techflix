import styles from './Inicio.module.css';
import { Link } from 'react-router-dom';
import { Botao } from "../../components"

function Inicio() {
  return (
    <div className={styles.conteudo}>
      <div className={styles.navegar}>
        <h1>Bem-vindo!</h1>
        <p>Olá, seja bem-vindo a TechFlix! Aqui você irá encontrar diversos conteúdos relacionado ao mundo da tecnologia, fique a vontade para dar uma olhada</p>
        <p><span>OBS.: Este é um projeto apenas para fins didáticos e não tem nenhuma intenção de recebimento de lucros e nem coleta de dados!!</span></p>
        <Link to={'/login'}><Botao>Entrar</Botao></Link>
      </div>
    </div>
  )
}  

export default Inicio;