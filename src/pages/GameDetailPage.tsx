import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {Heading, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import CriticScore from "../components/CriticScore.tsx";
import DefinitionItem from "../components/DefinitionItem.tsx";
import {Publisher} from "../entities/Publisher.ts";
import {Genre} from "../entities/Genre.ts";
import GameAttributes from "../components/GameAttributes.tsx";

const GameDetailPage = () => {

    const {slug} = useParams()

    const {data: game, isLoading, error} = useGame(slug!)

    if (isLoading) return <Spinner/>
    if (error || !game) throw error

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameAttributes game={game}/>
        </>
    )
}

export default GameDetailPage