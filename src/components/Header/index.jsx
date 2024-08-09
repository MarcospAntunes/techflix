import { useState }  from "react"
import styles from './Header.module.css'
import { MenuMobile, ModalUsuario } from "../index"
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai'
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