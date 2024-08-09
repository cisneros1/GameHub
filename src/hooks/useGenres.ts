import {useQuery} from '@tanstack/react-query'
import APIClient from "../services/api-client.ts";
import {Genre} from "../entities/Genre.ts";

const apiClient = new APIClient<Genre>('/genres')


const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    retry: 3
})

export default useGenres