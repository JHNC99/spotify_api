import {
  Box,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ReleaseItem = ({ realease }) => {
  const artists = realease.artists.map((artist) => artist.name);
  return (
    <Box>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={realease.images[1].url}
          alt="Caffe Latte"
        />
        <Stack>
          <CardBody>
            <Heading size="md">Artistas:</Heading>
            <span>
              {artists.map((artist, index) => (
                <Text key={index}>{artist},</Text>
              ))}
            </span>
            <Heading size="md">Nombre:</Heading>
            <Text>{realease.name}</Text>
            <Heading size="md">Fecha de lanzamiento:</Heading>
            <Text>{realease.release_date}</Text>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
};

export default ReleaseItem;
