import {
  Center,
  Box,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
function SearchForm({ getPlayerUsername }) {
  const [playerUsername, setPlayerUsername] = useState("");

  const handleSubmitPlayerUsername = (e) => {
    e.preventDefault();
    getPlayerUsername(playerUsername);
  };
  return (
    <Stack direction={["column", "row"]}>
      <Box flex="1">
        <form onSubmit={handleSubmitPlayerUsername}>
          <Flex>
            <FormControl>
              <FormLabel>Enter player username</FormLabel>
              <Input
                type="text"
                onChange={(e) => setPlayerUsername(e.target.value)}
              />
            </FormControl>
            <Center alignItems="end">
              <Button type="submit" colorScheme="green">
                Search
              </Button>
            </Center>
          </Flex>
        </form>
      </Box>
    </Stack>
  );
}

export default SearchForm;
