import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import Platform from "../entities/Platform.ts";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')


const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    retry: 3,
})

export default usePlatforms;