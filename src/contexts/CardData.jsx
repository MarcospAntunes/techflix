import { createContext, useState } from "react";

export const CardDataContext = createContext()

export function CardDataProvider({ children }) {
  const [clickedCardData, setClickedCardData] = useState()
  const [modalOpen, setModalOpen] = useState(false)

  const setClickedCard = (data) => {
    setClickedCardData(data)
  }

  const setOpenModal = (isOpen) => {
    setModalOpen(isOpen)
  }

  const openModal = () => {
    setModalOpen(true)
  }

  return (
    <CardDataContext.Provider value={{clickedCardData, setClickedCard, setOpenModal, openModal, modalOpen }}>
      {children}
    </CardDataContext.Provider>
  )
}