import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Container maxW="1100px" paddingY="1rem">
        <SearchForm />
      </Container>
    </ChakraProvider>
  );
}

export default App;
