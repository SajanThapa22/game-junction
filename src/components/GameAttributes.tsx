import { SimpleGrid, Badge, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as="dl">
        <DefinitionItem term="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <Badge
            fontSize="14px"
            paddingX={2}
            borderRadius={4}
            colorScheme={
              game.metacritic > 75
                ? "green"
                : game.metacritic > 60
                ? "yellow"
                : ""
            }
          >
            {game.metacritic}
          </Badge>
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}> {genre.name} </Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Publisher">
          {game.publishers.map((p) => (
            <Text key={p.id}> {p.name} </Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
