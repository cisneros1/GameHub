import useGenres from "./hooks/useGenres.ts";
import {HStack, List, ListItem, Img, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-urls.ts";

const GenreList = () => {
    const {data} = useGenres()

    return (
        <List>
            {data.map((genre) =>
                <ListItem key={genre.id} paddingY={'5px'}>
                    <HStack>
                        <Img boxSize={'32px'}
                               borderRadius={8}
                               src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Text fontSize={'lg'}>{genre.name}</Text>
                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList