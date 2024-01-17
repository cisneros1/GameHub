import {Grid, GridItem, HStack, Show} from '@chakra-ui/react'
import './App.css'
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./components/hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./components/hooks/useGames.ts";
import SortSelector from "./components/SortSelector.tsx";

export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)


    return (
        <>
            <Grid templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`, //1024 px
            }}
                  templateColumns={{
                      base: '1fr', // 1 fraction
                      lg: '200px 1fr'
                  }}
            >
                <GridItem area={'nav'}>
                    <NavBar/>
                </GridItem>

                <Show above={'lg'}>
                    <GridItem area={'aside'} paddingX={5}>
                        <GenreList selectedGenre={gameQuery.genre}
                                   onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
                    </GridItem>
                </Show>
                <GridItem area={'main'}>
                    <HStack spacing={5} padding={2} marginBottom={5}>
                        <PlatformSelector selectedPlatform={gameQuery.platform}
                                          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                        <SortSelector/>
                    </HStack>
                    <GameGrid gameQuery={gameQuery}/>
                </GridItem>

            </Grid>

        </>
    )
}

export default App
