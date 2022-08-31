import {
  Center,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Flex,
  Button,
} from "@chakra-ui/react";
function SearchForm() {
  return (
    <Flex wrap="wrap" paddingTop="3rem">
      <Box flex="1" paddingRight="1rem">
        <form>
          <Flex>
            <FormControl>
              <FormLabel>Enter player username</FormLabel>
              <Input type="text" />
            </FormControl>
            <Center alignItems="end">
              <Button type="submit" colorScheme="green">
                Search
              </Button>
            </Center>
          </Flex>
        </form>
      </Box>
      <Box>
        <form>
          <Flex>
            <FormControl>
              <FormLabel>Get by title</FormLabel>
              <Select placeholder="Select title">
                <option value="GM">Grandmaster</option>
                <option value="WGM">Woman Grandmaster</option>
                <option value="IM">Internarional Master</option>
                <option value="WIM">Woman Internarional Master</option>
                <option value="FM">Fide Master</option>
                <option value="WFM">Woman Fide Master</option>
                <option value="NM">National Master</option>
                <option value="WNM">Woman National Master</option>
                <option value="CM">Candidate Master</option>
                <option value="WCM">Woman Candidate Master</option>
              </Select>
            </FormControl>
            <Center alignItems="end">
              <Button type="submit" colorScheme="green">
                Get Players
              </Button>
            </Center>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}

export default SearchForm;
