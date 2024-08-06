import { useContext } from "react";
import { CardDataContext } from "../contexts";

export function useCardData() {
  const context = useContext(CardDataContext)
  if(!context) {
    throw new Error("UseCardDataContext deve ser usado dentro de um CardDataProvider")
  }
  return context
}