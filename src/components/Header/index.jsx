import React from "react"
import styles from './Header.module.css'
import { useState } from "react"
import { MenuMobile } from "../MenuMobile"
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai'
import ModalUsuario from '../../components/ModalUsuario'
import Nav from "./Nav"

function Header({ themeToggler }) {
    const [openModal, setOpenModal] = useState(false)
    const [menuIsVisible, setmenuIsVisible] = useState(false)

    return(
        <header>
            <h1 className={styles.logo}>TechFlix</h1>
            <MenuMobile menuIsVisible={menuIsVisible} setmenuIsVisible={setmenuIsVisible} />
            <Nav/>
            <AiOutlineUser className={styles.usuarioIcon} onClick={() => setOpenModal(true)} />
            <ModalUsuario isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} themeToggler={themeToggler} />
            <AiOutlineMenu onClick={() => setmenuIsVisible(true)} className={styles.mobileMenu} />
        </header>
    )
}

export default Header