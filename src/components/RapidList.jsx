import { Stack, HStack, Avatar, Badge, Heading, Link } from "@chakra-ui/react";

function RapidList({ rapidPlayers }) {
  return (
    <Stack spacing="4">
      {rapidPlayers.map((player) => (
        <HStack key={player.player_id}>
          <Heading size="sm">#{player.rank}</Heading>
          <Avatar name={player.name} src={player.avatar} />
          <Badge variant="solid" colorScheme="red">
            {player.title}
          </Badge>
          <Heading size="sm">
            <Link
              href={player.url}
              color="green"
              textDecoration="underline"
              target="_blank"
            >
              {player.username}
            </Link>
          </Heading>
        </HStack>
      ))}
    </Stack>
  );
}

export default RapidList;
