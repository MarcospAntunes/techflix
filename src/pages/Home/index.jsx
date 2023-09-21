import React, { useMemo } from 'react';
import styles from './Home.module.css'
import { AiOutlineUser } from 'react-icons/ai'
import Card from '../../components/Card';
import { motion } from "framer-motion";
import { useState, useEffect, useRef} from 'react';
import ModalUsuario from '../../components/ModalUsuario'
import { videosBack, videosFront, videosGame, videosDataBase, videosMobile } from './filtrarVideos'
import CaixaDePesquisa from '../../components/CaixadePesquisa/.index';

function Home({ themeToggler }) {
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
                <ModalUsuario isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} themeToggler={themeToggler} /> 
            </header>

            <main>
                <section className={styles.inicio}>
                    <CaixaDePesquisa search={search} setSearch={setSearch} />
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
                        
                        {useMemo(() => (videosFrontFiltrados.map((video) => {
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
                            })), [videosFrontFiltrados])}
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
                        {useMemo(() => videosBackFiltrados.map((video) => {
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
                            }), [videosBackFiltrados])}
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
                        {useMemo(() => videosMobileFiltrados.map((video) => {
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
                            }), [videosMobileFiltrados])}
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
                        {useMemo(() => videosGameFiltrados.map((video) => {
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
                            }), [videosGameFiltrados])}
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
                        {useMemo(() => videosDataBaseFiltrados.map((video) => {
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
                            }), [videosDataBaseFiltrados])}
                    </motion.ul>    
                </section>
            </main>
        </>
    )
}


export default Home;

