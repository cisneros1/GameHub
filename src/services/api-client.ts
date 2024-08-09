import axios, {AxiosRequestConfig} from 'axios'

export interface FetchResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        // key will be including the query string of every http request to the backend
        key: '33024045bf51435cb49574fd5d37d21c'
    }
})

class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = async (config: AxiosRequestConfig) => {
        const response = await axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
        return response.data
    }

    get = async (id: number | string) => {
        return await axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
    }
}

export default APIClient