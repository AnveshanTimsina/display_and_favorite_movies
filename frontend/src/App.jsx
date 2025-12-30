import './App.css'
import {Routes, Route} from 'react-router-dom';
import MovieCard from './components/MovieCard.jsx'
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'

function App() {

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

    </main>
  )
}

export default App
