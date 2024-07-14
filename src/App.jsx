import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Player from "./components/Player";

function App() {
  useEffect(() => {
    console.log("in useEffect of App");
  }, []);
  return (
    <>
      <Player />
    </>
  );
}

export default App;
