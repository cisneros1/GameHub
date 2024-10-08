import Genre from "./Genre.ts";
import Platform from "./Platform.ts";
import Publisher from "./Publisher.ts";

export default interface Game {
    id: number
    name: string
    slug: string
    genres: Genre[],
    publishers: Publisher[],
    description_raw: string,
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
    rating_top: number
}