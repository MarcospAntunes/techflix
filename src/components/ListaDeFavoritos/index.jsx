import React from 'react'
import styles from './ListaDeFavoritos.module.css'
import Card from '../Card'


function ListaDeFavoritos({ videos }) {
  return (
  <>
    <h2>Meus Favoritos</h2>
    <section className={styles.containerFav}>
      <ul className={styles.ListaFav}>
        {videos.map((video) => <Card
          className={styles.CardFavoritos}
          key={video.id} 
          id={video.id} 
          link={video.link} 
          titulo={video.titulo}
          autor={video.autor}
          categoria={video.categoria}
          assunto={video.assunto}
          banner={video.banner}
      />)}
      </ul>
    </section>
  </>
    
  )
}

export default ListaDeFavoritos