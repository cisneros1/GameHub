import { Game } from './hooks/useGames'
import {Card, CardBody, Heading, HStack, Img, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-urls.ts";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {


    return (
        <Card borderRadius={'10px'} overflow={'hidden'} width={'300px'}>
            <Img src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic} />
                </HStack>

            </CardBody>
        </Card>
    )
}

export default GameCard