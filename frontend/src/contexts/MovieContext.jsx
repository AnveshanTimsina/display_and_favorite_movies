import { useState, useEffect } from "react";
import { MovieContext } from "./MovieContextDef";

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState(() => {
        const storedFavs = localStorage.getItem("favorites")
        return storedFavs ? JSON.parse(storedFavs) : []
    })

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])


    const addToFavorites = (movie) => {
        setFavorites(f => {
            if (f.some(m => m.id === movie.id)) return f
            return [...f, movie]
        })
    }

    const removeFavorites = (movieId) => {
        setFavorites(f => f.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) =>{
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFavorites, 
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}