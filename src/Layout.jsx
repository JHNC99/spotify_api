import React from "react";
import { Container, SimpleGrid, Heading, Input } from "@chakra-ui/react";
import ReleaseItem from "./components/ReleaseItem";
import ArtistDetails from "./components/ArtistDetails";
import Header from "./components/Header";
import { useTracks } from "./hooks/useTracks";

const Layout = () => {
  const { realease, artist, searchArtist } = useTracks();
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Input
          variant="flushed"
          placeholder="Buscar por artista"
          onChange={(e) => searchArtist(e.target.value)}
        />
        <Heading size="md" mt="5" mb="5">
          {artist.length > 0 ? "Mi artista" : "Nuevos lanzamientos"}
        </Heading>
        <SimpleGrid minChildWidth="25%" spacing="40px">
          {artist.length > 0
            ? artist.map((artist) => (
                <ArtistDetails key={artist.id} artist={artist} />
              ))
            : realease.map((realease) => (
                <ReleaseItem key={realease.id} realease={realease} />
              ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Layout;
