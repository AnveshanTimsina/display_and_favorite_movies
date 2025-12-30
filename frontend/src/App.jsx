import './App.css'
import MovieCard from './MovieCard.jsx'

function App() {

  return (
    <>
      <MovieCard movie={{title: "Test Movie1", release_date: "2020"}} />
      <MovieCard movie={{title: "Test Movie2", release_date: "2021"}} />
      <MovieCard movie={{title: "Test Movie3", release_date: "2022"}} />
      <MovieCard movie={{title: "Test Movie4", release_date: "2023"}} />
    </>
  )
}

export default App
