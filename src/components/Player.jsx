import Controls from "./Controls";
import { tracks } from "../data/tracks";
import { useState, useRef } from "react";
import DisplayTrack from "./DisplayTrack";

function Player() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const audioRef = useRef();

  return (
    <div>
      <DisplayTrack currentTrack={currentTrack} audioRef={audioRef} />
      <Controls audioRef={audioRef} />
    </div>
  );
}

export default Player;
