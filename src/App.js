import React, { useEffect } from "react";
import Layout from "./Layout";
import Login from "./components/Login";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Spotify";
  }, [dispatch, token]);
  return <div>{token ? <Layout /> : <Login />}</div>;
}

export default App;
