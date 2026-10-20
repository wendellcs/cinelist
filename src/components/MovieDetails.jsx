// Importando os ícones do lucide-react
import { Heart, Star, X } from "lucide-react"

// Props -> Informações passadas para dentro de um componente filho
export default function MovieDetails({ movie, isFavorite, onToggleFavorite, onClose }) {
    // Retorna nulo caso não seja passado um filme válido.
    if (!movie) return null;

    return (
        <div>

        </div>
    )
}