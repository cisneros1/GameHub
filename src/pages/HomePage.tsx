import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import GenreList from "../components/GenreList.tsx";
import GameHeading from "../components/GameHeading.tsx";
import PlatformSelector from "../components/PlatformSelector.tsx";
import SortSelector from "../components/SortSelector.tsx";
import GameGrid from "../components/GameGrid.tsx";

const HomePage = () => {

    return (
        <div>
            <Grid templateAreas={{
                base: ` "main"`,
                lg: ` "aside main"`, //1024 px
            }}
                  templateColumns={{
                      base: '1fr', // 1 fraction
                      lg: '200px 1fr'
                  }}
            >

                <Show above={'lg'}>
                    <GridItem area={'aside'} paddingX={5}>
                        <GenreList/>
                    </GridItem>
                </Show>
                <GridItem area={'main'}>
                    <Box paddingLeft={20}>
                        <GameHeading/>
                        <Flex marginBottom={5}>
                            <Box marginRight={5}>
                                <PlatformSelector/>
                            </Box>

                            <SortSelector/>
                        </Flex>
                    </Box>
                    <GameGrid/>
                </GridItem>

            </Grid>
        </div>
    )
}

export default HomePage