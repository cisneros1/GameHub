import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import GenreList from "../components/GenreList.tsx";
import GameHeading from "../components/GameHeading.tsx";
import PlatformSelector from "../components/PlatformSelector.tsx";
import SortSelector from "../components/SortSelector.tsx";
import GameGrid from "../components/GameGrid.tsx";

const HomePage = () => {
    return (
        <div>
            <Grid
                templateAreas={{
                    base: `"main"`,
                    lg: `"aside main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "200px 1fr",
                }}
            >
                <GridItem area="aside" paddingX={5} hideBelow="lg">
                    <GenreList />
                </GridItem>
                <GridItem area="main">
                    <Box paddingLeft={20}>
                        <GameHeading />
                        <Flex marginBottom={5}>
                            <Box marginRight={5}>
                                <PlatformSelector />
                            </Box>
                            <SortSelector />
                        </Flex>
                    </Box>
                    <GameGrid />
                </GridItem>
            </Grid>
        </div>
    );
};

export default HomePage;