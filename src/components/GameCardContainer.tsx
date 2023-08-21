import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import "../cards.css";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      transition={" transform .15s ease-in"}
      _hover={{
        transform: "scale(1.03)",
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
