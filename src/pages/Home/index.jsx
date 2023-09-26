import React, { useMemo, useState, useEffect, useRef } from 'react';
import styles from './Home.module.css'
import Card from '../../components/Card';
import { videosBack, videosFront, videosGame, videosDataBase, videosMobile } from './filtrarVideos'
import CaixaDePesquisa from '../../components/CaixadePesquisa/.index';
import Carrossel from '../../components/Carrossel';
import Header from '../../components/Header';

function Home({ themeToggler }) {
    const carrossel = useRef()
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

