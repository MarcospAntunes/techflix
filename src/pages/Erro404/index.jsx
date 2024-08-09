import styles from './Erro404.module.css'
import { Botao } from '../../components';

function Erro404() {
  return(
    <div className={styles.container}>
      <div className={styles.Erro404}>
        <h1>Não foi possível acessar está página</h1>
        <p>Pode ser que esteja tentando acessar uma página inexistente ou que esteja temporáriamente fora do ar.</p>
        <Botao style={{marginTop: '20px'}} onClick={() => window.location.href="/"}>Voltar</Botao>
      </div>
    </div>
  )
}


export default Erro404