import {Heading} from "@chakra-ui/react";
import useGameQueryStore from "../store.ts";
import useGenre from "../hooks/useGenre.ts";
import usePlatform from "../hooks/usePlatform.ts";


const GameHeading = () => {
    const genreId = useGameQueryStore(s => s.gameQuery.genreId)
    const platformId = useGameQueryStore(s => s.gameQuery.platformId)

    console.log('IN HEADING')
    console.log('GENRE ID: ' + genreId)

    const genre = useGenre(genreId)
    console.log('GENRE: ' + genre)

    const platform = usePlatform(platformId)

    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`


    return (
        <Heading as={'h1'} marginY={5} fontSize={'5xl'}>
            {heading}
        </Heading>
    )
}

export default GameHeading