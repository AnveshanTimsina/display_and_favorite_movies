import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/useMovieContext';

function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function handleFavoriteClick(e){
        e.preventDefault()
        favorite ? removeFavorites(movie.id) : addToFavorites(movie)
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={handleFavoriteClick}>♥</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split(`-`)[0]}</p>
            </div>
        </div>
    )
}
export default MovieCard;