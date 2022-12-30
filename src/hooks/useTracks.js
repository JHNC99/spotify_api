import { useState, useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
export const useTracks = () => {
  const [{ token }] = useStateProvider();
  const [realease, setRealease] = useState([]);
  const [artist, setArtist] = useState([]);
  const getNewReleases = async () => {
    const response = await fetch(
      `https://api.spotify.com/v1/browse/new-releases?country=US&limit=10`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    setRealease(data.albums.items);
  };

  const searchArtist = async (artist) => {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=1`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    if (artist.length > 0) {
      setArtist(data.artists.items);
    } else {
      setArtist([]);
    }
  };

  useEffect(() => {
    getNewReleases();
  }, [setRealease]);

  return {
    realease,
    artist,
    searchArtist,
  };
};
