import { useState, useEffect } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import SearchForm from "./components/SearchForm";
import axios from "axios";

function App() {
  const [leaderBoardData, setLeaderBoardData] = useState(null);

  useEffect(() => {
    const getLeaderBoard = () => {
      axios
        .get("https://api.chess.com/pub/leaderboards")
        .then((res) => setLeaderBoardData(res.data))
        .catch((err) => console.log(err));
    };
    getLeaderBoard();
  }, []);
  return (
    <ChakraProvider>
      <Header />
      <Container maxW="1100px" paddingY="1rem">
        <SearchForm />
        <Leaderboard leaderBoardData={leaderBoardData} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
