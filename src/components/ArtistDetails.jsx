import {
  SimpleGrid,
  Box,
  Image,
  Card,
  Stack,
  CardBody,
  Text,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useStateProvider } from "../utils/StateProvider";
const ArtistDetails = ({ artist }) => {
  const [{ token }] = useStateProvider();
  const [topTracks, setTopTracks] = useState([]);

  const genres = artist.genres.map((genre) => {
    return <li>{genre}</li>;
  });
  const getTopTracks = async () => {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=ES`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    setTopTracks(data);
  };
  useEffect(() => {
    getTopTracks();
  }, []);

  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image src={artist.images[1].url} alt={artist.name} />

          <Stack p={4} spacing={4}>
            <CardBody>
              <Heading size="md">Nombre:</Heading>

              <Text py="2">
                <strong>{artist.name}</strong>
              </Text>
              <Heading size="md">Genero:</Heading>
              <Text py="2">
                <strong>{genres}</strong>
              </Text>
              <Heading size="md">Seguidores:</Heading>
              <Text py="2">
                <strong>{artist.followers.total}</strong>
              </Text>
              <Heading size="md">Popularidad:</Heading>
              <Text py="2">
                <strong>{artist.popularity}</strong>
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
      <Box>
        <Heading size="md">Top tracks:</Heading>
        <ul>
          {topTracks.tracks &&
            topTracks.tracks.map((track, index) => (
              <li key={index} className="track-list">
                <Image
                  src={track.album.images[1].url}
                  alt={track.name}
                  width="50px"
                />
                <Text py="2">{track.name}</Text>
              </li>
            ))}
        </ul>
      </Box>
    </SimpleGrid>
  );
};

export default ArtistDetails;
