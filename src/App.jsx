import { useState, useEffect } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import SearchForm from "./components/SearchForm";
import axios from "axios";
import PlayerUserName from "./components/PlayerUserName";

function App() {
  const [leaderBoardData, setLeaderBoardData] = useState(null);
  const [error, setError] = useState(null);
  const [playerUsernameData, setPlayerUsernameData] = useState(null);
  const [showPlayerUsername, setShowPlayerUsername] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(true);

  useEffect(() => {
    const getLeaderBoard = () => {
      axios
        .get("https://api.chess.com/pub/leaderboards")
        .then((res) => setLeaderBoardData(res.data))
        .catch((err) =>
          setError({
            status: err.response.status,
            message: err.response.data.message,
          })
        );
    };
    getLeaderBoard();
  }, []);

  const getPlayerUsername = (username) => {
    setShowPlayerUsername(true);
    setShowLeaderboard(false);
    axios
      .get(`https://api.chess.com/pub/player/${username}`)
      .then((res) => setPlayerUsernameData(res.data))
      .catch((err) =>
        setError({
          status: err.response.status,
          message: err.response.data.message,
        })
      );
  };

  return (
    <ChakraProvider>
      <Header />
      <Container maxW="1100px" paddingY="1rem">
        <SearchForm getPlayerUsername={getPlayerUsername} />
        {showLeaderboard && (
          <Leaderboard leaderBoardData={leaderBoardData} error={error} />
        )}
        {showPlayerUsername && (
          <PlayerUserName
            playerUsernameData={playerUsernameData}
            error={error}
          />
        )}
      </Container>
    </ChakraProvider>
  );
}

export default App;
