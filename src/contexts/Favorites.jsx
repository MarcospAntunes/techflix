import { createContext, useContext, useState } from "react";


export const FavoritesContext = createContext()
FavoritesContext.displayName = "myFavorites"

export default function FavoritesProvider({ children }) {
  const [ favorite, setfavorite ] = useState([])

  return (
    <FavoritesContext.Provider value={{ favorite, setfavorite }}>
      { children }
    </FavoritesContext.Provider>
  )
}

export function useFavoriteContext() {
  const { favorite, setfavorite } = useContext(FavoritesContext)

  function addFavorite(newFavorite) {
    const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id)

    let newList = [...favorite]
    if(!repeatedFavorite) {
      newList.push(newFavorite)
      return setfavorite(newList)
    }

    newList = favorite.filter((fav) => fav.id !== newFavorite.id)
    return setfavorite(newList)
  }

  return {
    favorite,
    addFavorite,
  }
}