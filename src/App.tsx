import {Grid, GridItem, Show} from '@chakra-ui/react'
import './App.css'
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";

function App() {

    return (
        <>
            <Grid templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`, //1024 px
            }}>
                <GridItem area={'nav'} bg={'coral'}>
                    <NavBar />
                </GridItem>

                <Show above={'lg'}>
                    <GridItem area={'aside'} >Aside</GridItem>
                </Show>
                <GridItem area={'main'}>
                    <GameGrid />
                </GridItem>

            </Grid>

        </>
    )
}

export default App
