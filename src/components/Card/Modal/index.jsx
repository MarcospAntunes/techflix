import favoritar from './favorito-desativado.png'
import desfavoritar from './favorito-ativo.png'
import { useFavoriteContext } from '../../../contexts/Favorites'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { ModalStyled } from './modalVideoStyle'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

function ModalVideo({ isOpen, setIsOpen, id, link, titulo, autor, categoria, assunto, banner }) {

    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = isFavorite ? desfavoritar : favoritar

    
    if(isOpen) {
        return (
            <ModalStyled $modal>
                <ModalStyled $conteudoModal>
                    <AiOutlineCloseCircle onClick={setIsOpen} className="closeModal" />
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
                        />  }
                    
                </ModalStyled>
            </ModalStyled>
            
        )
    }
    return null 
}

export default ModalVideo