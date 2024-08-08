import {useQuery} from '@tanstack/react-query'
import APIClient from "../services/api-client.ts";

const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
    id: number
    name: string
    image_background: string
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    retry: 3
})

export default useGenres