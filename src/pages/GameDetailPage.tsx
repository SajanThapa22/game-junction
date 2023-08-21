import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import GameAttributes from "../components/GameAttributes";
import ExpandableText from "../components/ExpandableText";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <SimpleGrid
        spacing={5}
        marginX={5}
        columns={{
          base: 1,
          md: 2,
        }}
      >
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText children={game.description_raw} maxChars={400} />
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
