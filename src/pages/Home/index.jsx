import React, { useMemo } from 'react';
import styles from './Home.module.css'
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai'
import Card from '../../components/Card';
import { useState, useEffect, useRef} from 'react';
import ModalUsuario from '../../components/ModalUsuario'
import { videosBack, videosFront, videosGame, videosDataBase, videosMobile } from './filtrarVideos'
import CaixaDePesquisa from '../../components/CaixadePesquisa/.index';
import { MenuMobile } from '../../components/MenuMobile';
import { Link } from 'react-router-dom';
import Carrossel from '../../components/Carrossel';

function Home({ themeToggler }) {
    const carrossel = useRef()
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, [])

    const [openModal, setOpenModal] = useState(false)

    const [search, setSearch] = useState('')
    const searchLowerCase = search.toLowerCase()

    const [menuIsVisible, setmenuIsVisible] = useState(false)

    const videosBackFiltrados = videosBack.filter(video => video.titulo.toLowerCase().includes(searchLowerCase))

    const videosFrontFiltrados = videosFront.filter(video => video.titulo.toLowerCase().includes(searchLowerCase)) 

    const videosMobileFiltrados = videosMobile.filter(video => video.titulo.toLowerCase().includes(searchLowerCase))

    const videosGameFiltrados = videosGame.filter(video => video.titulo.toLowerCase().includes(searchLowerCase)) 

    const videosDataBaseFiltrados = videosDataBase.filter(video => video.titulo.toLowerCase().includes(searchLowerCase))

    
    
    return (
        <>
            <header>
                <h1 className={styles.logo}>TechFlix</h1>
                <MenuMobile menuIsVisible={menuIsVisible} setmenuIsVisible={setmenuIsVisible} />
                <nav>
                    <a href="#">Início</a>
                    <a href="#Back-end">Back-end</a>
                    <a href="#Mobile">Mobile</a>
                    <a href="#Front-end">Front-end</a>
                    <a href="#Game-Development">Game Development</a>
                    <a href="#Data-Base">Data Base</a>
                    <Link to={'/meusFavoritos'}>Meus Favoritos</Link>
                </nav>
                
                
                <AiOutlineUser className={styles.usuarioIcon} onClick={() => setOpenModal(true)} />
                <ModalUsuario isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} themeToggler={themeToggler} />
                <AiOutlineMenu onClick={() => setmenuIsVisible(true)} className={styles.mobileMenu} /> 
            </header>

            <main>
                <section className={styles.inicio}>
                    <CaixaDePesquisa search={search} setSearch={setSearch} />
                </section>

                <section className={styles.galeriaDeVideos}>
                    <h1 id='Front-end'>Front-end</h1>
                    <Carrossel>
                        {useMemo(() => (videosFrontFiltrados.map((video) => {
                            return (
                                <Card
                                    id={video.id}
                                    key= {video.id} 
                                    link = {video.link} 
                                    titulo = {video.titulo}
                                    autor = {video.autor}
                                    categoria = {video.categoria}
                                    assunto = {video.assunto}
                                />
                            )
                            })), [videosFrontFiltrados])}
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
                                />
                            )
                            })), [videosDataBaseFiltrados])}
                    </Carrossel>    
                </section>
            </main>
        </>
    )
}


export default Home;

