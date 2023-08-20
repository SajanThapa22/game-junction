import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box>
        <Heading>Oops....</Heading>
        <Text>
          {isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected Error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
