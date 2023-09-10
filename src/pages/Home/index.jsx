import Botao from '../../components/Botao';
import styles from './Home.module.css'
import { CiSearch } from 'react-icons/ci';
import { AiOutlineUser } from 'react-icons/ai'
import videos from '../../json/db.json'
import Card from '../../components/Card';
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react';

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

    const videosDataBase = videos.filter((videos) => {
        return videos.categoria === 'Database'
    })

    const carrossel = useRef()
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, [])


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
                
                <AiOutlineUser className={styles.usuarioIcon} />
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
                    <motion.ul 
                        ref={carrossel} 
                        className={styles.lista} 
                        whileTap={{cursor: "grabbing"}} 
                        drag='x' 
                        dragConstraints={{right: 0, left: -width}}                        
                        initial={{x: 100}} 
                        animate={{x: 0}}
                        transition={{duration: 0.3}}
                    >
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
                    </motion.ul>

                    <h1>Back-end</h1>
                    <motion.ul 
                        ref={carrossel} 
                        className={styles.lista} 
                        whileTap={{cursor: "grabbing"}} 
                        drag='x' 
                        dragConstraints={{right: 0, left: -width}}                        
                        initial={{x: 100}} 
                        animate={{x: 0}}
                        transition={{duration: 0.3}}
                    >
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
                    </motion.ul>  
                    
                    <h1>Mobile</h1>
                    <motion.ul 
                        ref={carrossel} 
                        className={styles.lista} 
                        whileTap={{cursor: "grabbing"}} 
                        drag='x' 
                        dragConstraints={{right: 0, left: -width}}                        
                        initial={{x: 100}} 
                        animate={{x: 0}}
                        transition={{duration: 0.3}}
                    >
                        {videosMobile.map((video) => {
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
                    </motion.ul>

                    <h1>Game Development</h1>
                    <motion.ul 
                        ref={carrossel} 
                        className={styles.lista} 
                        whileTap={{cursor: "grabbing"}} 
                        drag='x' 
                        dragConstraints={{right: 0, left: -width}} 
                        initial={{x: 100}} 
                        animate={{x: 0}}
                        transition={{duration: 0.3}}
                    >
                        {videosGame.map((video) => {
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
                    </motion.ul>    

                    <h1>Data Base</h1>
                    <motion.ul 
                        ref={carrossel} 
                        className={styles.lista} 
                        whileTap={{cursor: "grabbing"}} 
                        drag='x' 
                        dragConstraints={{right: 0, left: -width}} 
                        initial={{x: 100}} 
                        animate={{x: 0}}
                        transition={{duration: 0.3}}
                    >
                        {videosDataBase.map((video) => {
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
                    </motion.ul>    
                </section>
            </main>
        </>
    )
}


export default Home;