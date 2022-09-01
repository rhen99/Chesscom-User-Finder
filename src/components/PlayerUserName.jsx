import {
  Box,
  Heading,
  Center,
  Spinner,
  HStack,
  Avatar,
  Badge,
  Link,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
function PlayerUserName({ playerUsernameData, error }) {
  let hasPlayerUsernameData = playerUsernameData !== null;
  let hasErrorMessage = error !== null;
  return (
    <Box paddingTop="3rem">
      <Heading paddingBottom="3rem">Search Result</Heading>
      {hasErrorMessage ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error.status}</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      ) : hasPlayerUsernameData ? (
        <HStack>
          <Avatar
            name={playerUsernameData.name}
            src={playerUsernameData.avatar}
          />
          <Badge variant="solid" colorScheme="red">
            {playerUsernameData.title}
          </Badge>
          <Heading size="sm">
            <Link
              href={playerUsernameData.url}
              color="green"
              textDecoration="underline"
              target="_blank"
            >
              {playerUsernameData.username}
            </Link>
          </Heading>
          {console.log(playerUsernameData)}
        </HStack>
      ) : (
        <Center>
          <Spinner color="green.500" />
        </Center>
      )}
    </Box>
  );
}

export default PlayerUserName;
