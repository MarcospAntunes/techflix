import { AiOutlineClose } from 'react-icons/ai'
import { BotaoStyled, ModalStyle} from './ModalStyle'
import { useAuth, useNavigate }  from '../../hooks'

function ModalUsuario({ isOpen, setModalOpen, themeToggler }) {
  const handleThemeToggle = () => {
    themeToggler()
  }

  const { logOut } = useAuth()
  const navigate = useNavigate()
  
  if(isOpen) {
    return (
      <ModalStyle $modal>
        <ModalStyle $conteudoModal>
          <BotaoStyled $botaoMenu onClick={handleThemeToggle}>Mudar tema</BotaoStyled>
          <BotaoStyled $botaoMenu  onClick={() => [logOut(), navigate('/')]}>Sair</BotaoStyled>
          <BotaoStyled $closeModal onClick={setModalOpen}><AiOutlineClose /></BotaoStyled>
        </ModalStyle>
      </ModalStyle>
    ) 
  }

  return null
}


export default ModalUsuario