import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Spinner,
} from "@chakra-ui/react";
import BlitzList from "./BlitzList";
import BulletList from "./BulletList";
import PuzzleRushList from "./PuzzleRushList";
import RapidList from "./RapidList";
function Leaderboard({ leaderBoardData }) {
  let hasLeaderBoardData = leaderBoardData !== null;
  return (
    <Box paddingTop="3rem">
      <Heading>Leaderboard</Heading>
      {!hasLeaderBoardData ? (
        <Center>
          <Spinner color="green.500" />
        </Center>
      ) : (
        <Tabs>
          <TabList>
            <Tab>Blitz</Tab>
            <Tab>Rapid</Tab>
            <Tab>Bullet</Tab>
            <Tab>Puzzle Rush</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <BlitzList blitzPlayers={leaderBoardData.live_blitz} />
            </TabPanel>
            <TabPanel>
              <RapidList rapidPlayers={leaderBoardData.live_rapid} />
            </TabPanel>
            <TabPanel>
              <BulletList bulletPlayers={leaderBoardData.live_bullet} />
            </TabPanel>
            <TabPanel>
              <PuzzleRushList puzzleRushPlayers={leaderBoardData.rush} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </Box>
  );
}

export default Leaderboard;
