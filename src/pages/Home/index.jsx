import React from 'react';
import Botao from '../../components/Botao';
import styles from './Home.module.css'
import { AiOutlineUser } from 'react-icons/ai'
import Card from '../../components/Card';
import { motion } from "framer-motion";
import { useState, useEffect, useRef} from 'react';
import ModalUsuario from '../../components/ModalUsuario'
import { videos, videosBack, videosFront, videosGame, videosDataBase, videosMobile } from './filtrarVideos'

function Home() {
    const carrossel = useRef()
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, [])

    const [openModal, setOpenModal] = useState(false)

    const [search, setSearch] = useState('')
    const searchLowerCase = search.toLowerCase()

    const videosBackFiltrados = videosBack.filter(video => video.titulo.toLowerCase().includes(searchLowerCase))

    const videosFrontFiltrados = videosFront.filter(video => video.titulo.toLowerCase().includes(searchLowerCase)) 

    const videosMobileFiltrados = videosMobile.filter(video => video.titulo.toLowerCase().includes(searchLowerCase))

    const videosGameFiltrados = videosGame.filter(video => video.titulo.toLowerCase().includes(searchLowerCase)) 

    const videosDataBaseFiltrados = videosDataBase.filter(video => video.titulo.toLowerCase().includes(searchLowerCase))
    
    return (
        <>
            <header>
                <h1 className={styles.logo}>TechFlix</h1>
                <nav>
                    <a href="#">Início</a>
                    <a href="#Back-end">Back-end</a>
                    <a href="#Mobile">Mobile</a>
                    <a href="#Front-end">Front-end</a>
                    <a href="#Game-Development">Game Development</a>
                    <a href="#Data-Base">Data Base</a>
                    <a href="#Meus-Favoritos">Meus Favoritos</a>
                </nav>
                
                <AiOutlineUser className={styles.usuarioIcon} onClick={() => setOpenModal(true)} />
                <ModalUsuario isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} /> 
            </header>

            <main>
                <section className={styles.inicio}>
                    <div className={styles.caixaPesquisa}>       
                        <input
                            type="search" name="pesquisa" 
                            id="pesquisa" 
                            placeholder='O que procura?' 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)}/>
                    </div>

                   <div className={styles.botoes}>
                       <Botao style={{marginRight:'20px'}}>Assistir agora</Botao>
                       <Botao $azul>Mais informações</Botao>
                   </div>
                </section>

                <section className={styles.galeriaDeVideos}>
                    <h1 id='Front-end'>Front-end</h1>
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
                        
                        {videosFrontFiltrados.map((video) => {
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

                    <h1 id='Back-end'>Back-end</h1>
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
                        {videosBackFiltrados.map((video) => {
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
                    
                    <h1 id='Mobile'>Mobile</h1>
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
                        {videosMobileFiltrados.map((video) => {
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

                    <h1 id='Game-Development'>Game Development</h1>
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
                        {videosGameFiltrados.map((video) => {
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

                    <h1 id='Data-Base'>Data Base</h1>
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
                        {videosDataBaseFiltrados.map((video) => {
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

