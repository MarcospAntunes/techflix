import React, { useEffect } from "react"
import styled, { css } from "styled-components"
import { AiOutlineClose } from 'react-icons/ai'

const Container = styled.div`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    pointer-events: none;
    transform: translateX(50px);
    transition: 0.3s;

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: 0.3s
    }

    nav {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        transform: translateX(50px);
        transition: 0.3s
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0px);
        transition: 0.3s;
        > svg {
            transform: rotate(0deg);
            transition: 0.3s
        }
        nav {   
            transform: translateX(0px);
        }
    `}
`

export function MenuMobile({ menuIsVisible, setmenuIsVisible  }) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
    }, [menuIsVisible])

    return(
        <Container isVisible={menuIsVisible}>
            <AiOutlineClose size={45} onClick={() => setmenuIsVisible(false)} />
            <nav>
                <a href="#">Início</a>
                <a href="#Back-end">Back-end</a>
                <a href="#Mobile">Mobile</a>
                <a href="#Front-end">Front-end</a>
                <a href="#Game-Development">Game Development</a>
                <a href="#Data-Base">Data Base</a>
                <a href="#Meus-Favoritos">Meus Favoritos</a>
            </nav>
        </Container>
    )
}