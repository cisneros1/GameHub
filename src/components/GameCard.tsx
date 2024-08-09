import {Game} from '../hooks/useGames'
import {Card, CardBody, Heading, HStack, Img} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-urls.ts";
import GameCardContainer from "./GameCardContainer.tsx";
import Emoji from "./Emoji.tsx";
import {Link} from "react-router-dom";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {


    return (
        <Card>
            <Img src={getCroppedImageUrl(game.background_image)}/>
            <GameCardContainer><CardBody>
                <HStack justifyContent={'space-between'}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize={'2xl'} marginBottom={3}>
                    <Link to={'/games/' + game.slug}>{game.name}</Link>
                    <Emoji rating={game.rating_top}/>
                </Heading>
            </CardBody></GameCardContainer>

        </Card>
    )
}

export default GameCard