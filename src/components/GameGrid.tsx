import {SimpleGrid, Spinner, Text} from "@chakra-ui/react"
import useGames from '../hooks/useGames'
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


const GameGrid = () => {
    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage
    } = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6]

    console.log(isFetchingNextPage)

    if (error) return (
        <Text>{error.message}</Text>
    )

    const fetchedGamesCount = data?.pages.reduce(
        (total, page) => total + page.results.length, 0) || 0

    return (
        <InfiniteScroll
            dataLength={fetchedGamesCount}
            hasMore={hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner/>}>
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={10} spacing={6}>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>)}

                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game}/>
                            </GameCardContainer>))}
                    </React.Fragment>))

                }
            </SimpleGrid>
        </InfiniteScroll>
        // {hasNextPage && <Button>{isFetchingNextPage ? 'Loading...' : 'Load More'}</Button>}
    )

}

export default GameGrid