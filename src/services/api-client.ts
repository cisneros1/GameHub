import axios from 'axios'

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        // key will be including the query string of every http request to the backend
        key: '33024045bf51435cb49574fd5d37d21c'
    }
})