/* eslint-disable react/prop-types */
import Controls from "../Controls/Controls";

import { useRef, useState, useEffect } from "react";
import DisplayTrack from "../DisplayTrack/DisplayTrack";
import styles from "./Player.module.scss";
import ProgressBar from "../ProgressBar/ProgressBar";

function Player({ currentTrack, setNextTrack, setPreviousTrack }) {
  const [totalDuration, setTotalDuration] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);

  const audioRef = useRef();
  const progressBarRef = useRef();

  return (
    <div className={styles.player}>
      <DisplayTrack
        currentTrack={currentTrack}
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        setTotalDuration={setTotalDuration}
      />
      <ProgressBar
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        totalDuration={totalDuration}
        timeProgress={timeProgress}
      />
      <Controls
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        totalDuration={totalDuration}
        timeProgress={timeProgress}
        setTimeProgress={setTimeProgress}
        setNextTrack={setNextTrack}
        setPreviousTrack={setPreviousTrack}
      />
    </div>
  );
}

export default Player;
