import useGameQueryStore from '../store.ts'
import {useInfiniteQuery} from "@tanstack/react-query";
import APIClient, {FetchResponse} from "../services/api-client.ts";
import {Platform} from "./usePlatforms.ts";

const apiClient = new APIClient<Game>('/games')

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
    rating_top: number
}


const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        initialData: undefined, initialPageParam: undefined,
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) => {
            return apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                }
            })
        },
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        },
        staleTime: 1000 * 60 * 5
    })
}

export default useGames