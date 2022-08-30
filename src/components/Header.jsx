import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Box bg="green.600" color="white">
      <Container paddingX="1rem" maxW="1100px">
        <Heading as="h3" size="md" paddingY="1rem">
          Chesscom User Finder
        </Heading>
      </Container>
    </Box>
  );
}

export default Header;
