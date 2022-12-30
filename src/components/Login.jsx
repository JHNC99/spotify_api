import React from "react";
import { Button } from "@chakra-ui/react";
const Login = () => {
  const handleLogin = async () => {
    const client_id = "003d92c953504ff4a4a45ece99fc039b";
    const redirect_uri = "http://localhost:3000/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <div>
      <Button colorScheme="teal" size="lg" onClick={handleLogin}>
        Conectar con spotify
      </Button>
    </div>
  );
};

export default Login;
