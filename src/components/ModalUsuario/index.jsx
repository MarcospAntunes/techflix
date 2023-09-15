import { ThemeProvider } from 'styled-components'
import styles from './Modal.module.css'
import { AiOutlineUser, AiOutlineClose } from 'react-icons/ai'

function ModalUsuario({ isOpen, setModalOpen }) {

    
    if(isOpen) {
        return (
            <div className={styles.modal}>
                <div className={styles.conteudoModal}>
                    <AiOutlineUser className={styles.usuarioIcon} />
                    <button className={styles.botaoMenu}>Mudar tema</button>
                    <button className={styles.botaoMenu} onClick={() => window.location.href='/'}>Sair</button>
                    <button className={styles.closeModal} onClick={setModalOpen}><AiOutlineClose /></button>
                    
                </div>
            </div>
        ) 
    }

    return null
}


export default ModalUsuario