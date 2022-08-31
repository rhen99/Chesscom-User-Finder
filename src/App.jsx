import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Container maxW="1100px" paddingY="1rem">
        <SearchForm />
        <Leaderboard />
      </Container>
    </ChakraProvider>
  );
}

export default App;
