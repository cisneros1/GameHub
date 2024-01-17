import useData from "./useData.ts";
import {Genre} from "./useGenres.ts";

export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number
    name: string
    background_image: string
    // Parent platform is not a platform array which is should be
    // instead it is an array of objects where each object has a property called platform
    parent_platforms: { platform: Platform }[]
    metacritic: number
}


const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}},
    [selectedGenre?.id])

export default useGames