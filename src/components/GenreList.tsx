import {
  List,
  ListItem,
  Image,
  HStack,
  Spinner,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import croppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner size="lg" />;
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  return (
    <>
      <Heading fontSize="2xl " marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={croppedImageUrl(genre.image_background)}
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign={"left"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                key={genre.id}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
