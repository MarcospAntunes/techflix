import Botao from '../../components/Botao';
import styles from './Home.module.css'
import { CiSearch } from 'react-icons/ci';
import { AiOutlineUser } from 'react-icons/ai'
import videos from '../../json/db.json'
import Card from '../../components/Card';

function Home() {
    const videosFront = videos.filter((videos) => {
        return videos.categoria === 'Front-end'
    })

    const videosBack = videos.filter((videos) => {
        return videos.categoria === 'Back-end'
    })

    const videosMobile = videos.filter((videos) => {
        return videos.categoria === 'Mobile'
    })

    const videosGame = videos.filter((videos) => {
        return videos.categoria === 'Game Development'
    })


    return (
        <>
            <header>
                <h1 className={styles.logo}>TechFlix</h1>
                <nav>
                    <a href="#">Início</a>
                    <a href="#">Back-end</a>
                    <a href="">Mobile</a>
                    <a href="#">Front-end</a>
                    <a href="#">Meus Favoritos</a>
                </nav>
                
                <AiOutlineUser size={48} />

                
            </header>

            <main>
                <section className={styles.inicio}>

                <div className={styles.caixaPesquisa}><input type="text" name="" id="" placeholder='O que procura?' /></div>
                   <div className={styles.botoes}>
                       <Botao style={{marginRight:'20px'}}>Assistir agora</Botao>
                       <Botao $azul>Mais informações</Botao>
                   </div>
                </section>

                <section className={styles.galeriaDeVideos}>

                    <h1>Front-end</h1>
                    <ul className={styles.lista}>
                        {videosFront.map((video) => {
                            return (
                                <Card
                                    key= {video.id} 
                                    link = {video.link} 
                                    titulo = {video.titulo}
                                    autor = {video.autor}
                                    categoria = {video.categoria}
                                    assunto = {video.assunto}
                                />
                            )
                            })}
                    </ul>

                    <h1>Back-end</h1>
                    <ul className={styles.lista}>
                        {videosBack.map((video) => {
                            return (
                                    <Card
                                        key= {video.id} 
                                        link = {video.link} 
                                        titulo = {video.titulo}
                                        autor = {video.autor}
                                        categoria = {video.categoria}
                                        assunto = {video.assunto}
                                    />
                            )
                            })}
                    </ul>  
                </section>
            </main>
        </>
    )
}


export default Home;