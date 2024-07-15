/* eslint-disable react/prop-types */
import Controls from "../Controls/Controls";

import { useState, useRef } from "react";
import DisplayTrack from "../DisplayTrack/DisplayTrack";
import styles from "./Player.module.scss";

function Player({ currentTrack, setNextTrack, setPreviousTrack }) {
  console.log("current track is ", currentTrack.title);

  const audioRef = useRef();

  return (
    <div className={styles.player}>
      <DisplayTrack currentTrack={currentTrack} audioRef={audioRef} />
      <Controls
        audioRef={audioRef}
        setNextTrack={setNextTrack}
        setPreviousTrack={setPreviousTrack}
      />
    </div>
  );
}

export default Player;
