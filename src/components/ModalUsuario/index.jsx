import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BotaoStyled, ModalStyle} from './ModalStyle'

function ModalUsuario({ isOpen, setModalOpen, themeToggler }) {
    const handleThemeToggle = () => {
        themeToggler()
    }
    
    if(isOpen) {
        return (
            <ModalStyle $modal>
                <ModalStyle $conteudoModal>
                    <BotaoStyled $botaoMenu onClick={handleThemeToggle}>Mudar tema</BotaoStyled>
                    <BotaoStyled $botaoMenu  onClick={() => window.location.href='/'}>Sair</BotaoStyled>
                    <BotaoStyled $closeModal onClick={setModalOpen}><AiOutlineClose /></BotaoStyled>
                </ModalStyle>
            </ModalStyle>
        ) 
    }

    return null
}


export default ModalUsuario