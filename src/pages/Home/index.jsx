import { useMemo, useState, useEffect, useRef } from 'react';
import styles from './Home.module.css'
import { videosBack, videosFront, videosGame, videosDataBase, videosMobile } from './filtrarVideos'
import { Header, Card, Carrossel, CaixaDePesquisa, Footer, ModalVideo } from './../../components'


function Home({ themeToggler }) {
  const carrossel = useRef()
    // eslint-disable-next-line no-unused-vars
  const [width, setWidth] = useState(0)
  useEffect(() => {
      setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])
  const [search, setSearch] = useState('')
  const searchLowerCase = search.toLowerCase()

  const videosBackFiltrados = videosBack.filter(video => video.titulo.toLowerCase().includes(searchLowerCase))

  const videosFrontFiltrados = videosFront.filter(video => video.titulo.toLowerCase().includes(searchLowerCase)) 

  const videosMobileFiltrados = videosMobile.filter(video => video.titulo.toLowerCase().includes(searchLowerCase))

  const videosGameFiltrados = videosGame.filter(video => video.titulo.toLowerCase().includes(searchLowerCase)) 

  const videosDataBaseFiltrados = videosDataBase.filter(video => video.titulo.toLowerCase().includes(searchLowerCase))

  return (
    <>
      <Header themeToggler={themeToggler}/>
      <main>
        <section className={styles.inicio}>
          <CaixaDePesquisa search={search} setSearch={setSearch} />
        </section>

        <section className={styles.galeriaDeVideos}>
          <h1 id='Front-end'>Front-end</h1>
          <Carrossel>
            {(videosFrontFiltrados.map((video) => {
              return (
                <Card
                  id={video.id}
                  key= {video.id} 
                  link = {video.link} 
                  titulo = {video.titulo}
                  autor = {video.autor}
                  categoria = {video.categoria}
                  assunto = {video.assunto}
                  banner = {video.banner}
                />
              )
            }))}
          </Carrossel>

          <h1 id='Back-end'>Back-end</h1>
          <Carrossel>
            {useMemo(() => (videosBackFiltrados.map((video) => {
              return (
                <Card
                  id={video.id}
                  key= {video.id} 
                  link = {video.link} 
                  titulo = {video.titulo}
                  autor = {video.autor}
                  categoria = {video.categoria}
                  assunto = {video.assunto}
                  banner = {video.banner}
                />
              )
            })), [videosBackFiltrados])}
          </Carrossel>  
              
          <h1 id='Mobile'>Mobile</h1>
          <Carrossel>
            {useMemo(() => (videosMobileFiltrados.map((video) => {
              return (
                <Card
                  id={video.id}
                  key= {video.id} 
                  link = {video.link} 
                  titulo = {video.titulo}
                  autor = {video.autor}
                  categoria = {video.categoria}
                  assunto = {video.assunto}
                  banner = {video.banner}
                />
              )
            })), [videosMobileFiltrados])}
          </Carrossel>

          <h1 id='Game-Development'>Game Development</h1>
          <Carrossel>
            {useMemo(() => (videosGameFiltrados.map((video) => {
                return (
                  <Card
                    id={video.id}
                    key= {video.id} 
                    link = {video.link} 
                    titulo = {video.titulo}
                    autor = {video.autor}
                    categoria = {video.categoria}
                    assunto = {video.assunto}
                    banner = {video.banner}
                  />
                )
              })), [videosGameFiltrados])}
          </Carrossel>    

          <h1 id='Data-Base'>Data Base</h1>
          <Carrossel>
            {useMemo(() => (videosDataBaseFiltrados.map((video) => {
              return (
                <Card
                  id={video.id}
                  key= {video.id} 
                  link = {video.link} 
                  titulo = {video.titulo}
                  autor = {video.autor}
                  categoria = {video.categoria}
                  assunto = {video.assunto}
                  banner = {video.banner}
                />
              )
            })), [videosDataBaseFiltrados])}
          </Carrossel>
          <ModalVideo />    
        </section>
      </main>
      <Footer />
    </>
  )
}


export default Home;

