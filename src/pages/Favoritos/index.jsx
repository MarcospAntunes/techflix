import React from "react";
import { useFavoriteContext } from "../../contexts";
import styles from './Favoritos.module.css'
import { Header, ListaDeFavoritos, ModalVideo, Footer } from '../../components'

function Favoritos({ themeToggler }) {
  const {favorite} = useFavoriteContext()
  
  return (
    <>
      <Header themeToggler={themeToggler}/> 
      <section className={styles.sectionFavoritos}>
        {favorite.length === 0 ?
            <h1>Você não possui favoritos!</h1> 
          : 
            <>
              <ListaDeFavoritos videos={favorite}/>
              <ModalVideo />
            </>
        }         
      </section>
      <Footer />
    </>
        
  )
}

export default Favoritos