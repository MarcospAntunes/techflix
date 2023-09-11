import styles from './Modal.module.css'

function ModalUsuario({ isOpen, setModalOpen }) {
    if(isOpen) {
        return (
            <div className={styles.modal}>
                <div className={styles.conteudoModal}>
                    <button className={styles.botaoMenu}>Mudar tema</button>
                    <button className={styles.botaoMenu} onClick={() => window.location.href='/'}>Sair</button>
                    <button className={styles.closeModal} onClick={setModalOpen}>x</button>
                </div>
            </div>
        ) 
    }

    return null
}


export default ModalUsuario