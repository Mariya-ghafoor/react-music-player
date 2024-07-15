/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";

import { IoIosSkipForward, IoIosSkipBackward } from "react-icons/io";

import styles from "./Controls.module.scss";
function Controls({ audioRef, setNextTrack, setPreviousTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  //const [showVolumeBar, setShowVolumeBar] = useState(false);

  const [volume, setVolume] = useState(60);
  const [isMute, setIsMute] = useState(false);

  const volumeBarRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    if (isMute) {
      //Setting volume to 0
      audioRef.current.volume = 0;
      //sending bar to 0 position
      volumeBarRef.current.value = 0;
    } else {
      audioRef.current.volume = volume / 100;

      //if volume bar is at zero then setting mute to true
      if (audioRef.current.volume === 0) setIsMute(true);
    }

    //if (volume < 2 && isMute) setIsMute(true);
  }, [isPlaying, volume, isMute]);

  const onVolumeClick = () => {
    setIsMute((isMute) => !isMute);
  };

  const onSkipForwardClick = () => {
    setNextTrack();
  };

  const onSkipBackwardClick = () => {
    setPreviousTrack();
  };

  return (
    <div className={styles.controls__main}>
      <button onClick={onSkipBackwardClick}>
        <IoIosSkipBackward />
      </button>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <button onClick={onSkipForwardClick}>
        <IoIosSkipForward />
      </button>
      <button onClick={() => onVolumeClick()}>
        {isMute ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      {/* <button onClick={() => onVolumeClick()}>
        {isMute || volume < 2 ? (
          <FaVolumeMute />
        ) : volume < 40 ? (
          <FaVolumeDown />
        ) : (
          <FaVolumeUp />
        )}
      </button> */}
      <input
        ref={volumeBarRef}
        type="range"
        min={0}
        max={100}
        value={volume}
        //onChange={onVolumeBarChange}
        onChange={(e) => {
          setIsMute(false);
          setVolume(e.target.value);
        }}
      />
    </div>
  );
}

export default Controls;
