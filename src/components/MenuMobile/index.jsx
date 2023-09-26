import React, { useEffect } from "react"
import styled, { css } from "styled-components"
import { AiOutlineClose } from 'react-icons/ai'
import Nav from "../Header/Nav"

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

    ${({ isvisible }) => isvisible && css`
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
        <Container isvisible={menuIsVisible}>
            <AiOutlineClose size={45} onClick={() => setmenuIsVisible(false)} />
            <Nav />
        </Container>
    )
}