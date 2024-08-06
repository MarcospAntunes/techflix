import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import styles from './Carrossel.module.css'

function Carrossel({ children }) {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])
  return (
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
      {children}
    </motion.ul>
  )
}

export default Carrossel