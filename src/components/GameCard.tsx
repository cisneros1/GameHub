import { Game } from './hooks/useGames'
import {Card, CardBody, Heading, Img, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {


    return (
        <Card borderRadius={'10px'} overflow={'hidden'}>
            <Img src={game.background_image} />
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
            </CardBody>
        </Card>
    )
}

export default GameCard