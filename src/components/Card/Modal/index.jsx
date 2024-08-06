import { useFavoriteContext } from '../../../contexts'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { ModalStyled } from './modalVideoStyle'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useCardData } from '../../../hooks'

function ModalVideo() {
  const { clickedCardData, setOpenModal, modalOpen } = useCardData()

  const closeModal = () => {
    setOpenModal(false)
  }
  
  const { favorite, addFavorite } = useFavoriteContext()
    
  if(modalOpen && clickedCardData) {
    const { id, link, titulo, autor, categoria, assunto, banner } = clickedCardData
    const isFavorite = favorite.some((fav) => fav.id === id)
    
    return (
      <ModalStyled $modal>
      <ModalStyled $conteudoModal>
        <AiOutlineCloseCircle onClick={closeModal} className="closeModal" />
        <iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h2>{titulo} </h2>
        <p>{categoria}</p>
        <p>{autor}</p>
        {isFavorite ? 
          <MdFavorite  alt="IconeFav"
            className="favorito favoritado"
            onClick={() => addFavorite({ id, link, titulo, autor, categoria, assunto, banner })}
          /> 
        : 
          <MdFavoriteBorder alt="IconeFav"
            className="favorito "
            onClick={() => addFavorite({ id, link, titulo, autor, categoria, assunto, banner })} 
          />  
        }
        </ModalStyled>
      </ModalStyled>
    )
  }
  return null 
}

export default ModalVideo