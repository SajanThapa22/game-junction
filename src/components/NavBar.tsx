import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game-junction.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack gap={"40px"} padding="15px 35px">
      <Link to="/">
        <Image objectFit="contain" src={logo} boxSize="60px" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
