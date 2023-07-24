import { List, ListItem, Image, HStack, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import croppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner size="xl" />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={croppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            ></Image>
            <Text fontSize="lg" key={genre.id}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
