import useTrailers from "../hooks/useTrailers.ts";

interface Props {
    gameId: number
}

const GameTrailer = ({gameId} : Props) => {
    const {data, error, isLoading} = useTrailers(gameId)
    // console.log(data)

    if (isLoading) return null

    if (error) throw error

    const first = data?.results[0]
    if (!first) return null

    return first ? <video src={first.data[480]} poster={first.preview} controls>

    </video> : null

};

export default GameTrailer;