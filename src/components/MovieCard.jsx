import { Heart, Star } from "lucide-react"

export default function MovieCard({ movie, isFavorite, onToggleFavorite, onSelect = null }) {
    return (
        <article
            className="group overflow-hidden rounded-xl border border-white/10 
            bg-zinc-900 transition hover:-translate-y-1 hover:border-violet-500/50">

            <div className="relative aspect-2/3 overflow-hidden">
                {/* Carrega a imagem de acordo com o filme passado */}
                <img src={movie.poster}
                    alt={`Imagem ilustrativa de ${movie.title}`}
                    className="h-full w-full object-cover transition duration-500 
                    group-hover:scale-105" />

                <button
                    onClick={() => onToggleFavorite(movie.id)}
                    className="absolute right-3 top-3 rounded-full bg-black/60 p-2 backdrop-blur
                    transition hover:bg-black/90">

                    <Heart size={20}
                        className={isFavorite ? "fill-red-500 text-red-500" : "text-white"} />

                </button>

                <div
                    className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-black/70 px-2
                    py-1 text-sm">

                    <Star size={15} className="fill-yellow-400 text-yellow-400" />
                    <span>{movie.rating}</span>
                </div>
            </div>
        </article>
    )
}