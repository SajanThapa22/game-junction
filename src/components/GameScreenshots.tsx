import { Box, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (error) throw error;
  if (isLoading) return <Spinner />;
  return (
    <>
      <SimpleGrid
        marginY={3}
        spacing={5}
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
      >
        {data?.results?.map((ss) => (
          <Box key={ss.id} overflow={"hidden"} borderRadius={5}>
            <Image
              transition="transform .3s ease-in"
              _hover={{
                transform: "scale(1.1)",
              }}
              key={ss.id}
              src={ss.image}
            />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
