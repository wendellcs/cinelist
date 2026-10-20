import { useEffect, useState } from "react"
import { Film, Heart, Search, Clapperboard, X } from 'lucide-react'

// Importando os dados dos filmes
import { movies } from './data/movies'
// Importando o componente MovieCard para listar cada filme
import MovieCard from "./components/MovieCard"
// Importando o component MovieDetails para criar o modal com a descrição de cada filme
import MovieDetails from "./components/MovieDetails"

// Chave do localStorage
const STORAGE_KEY = 'cinelist-favorites'

// LocalStorage -> Um armazenamento dentro do próprio navegador do usuário. Não utilizamos para guardar dados 
// sensíveis, apenas informações básicas para uma melhor usabilidade e funcionamento da aplicação.

// Session Storage -> Similar ao local storage, mas é reiniciado quando a aba é fechada.

function App() {
  const [favorites, setFavorites] = useState(null)
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('Todos')
  const [showFavorites, setShowFavorites] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)



  return (
    <div>
    </div>
  )
}

export default App
