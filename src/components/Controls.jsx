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

function Controls({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);
  //const [showVolumeBar, setShowVolumeBar] = useState(false);

  const [volume, setVolume] = useState(60);
  const [isMute, setIsMute] = useState(false);

  const volumeBarRef = useRef();

  useEffect(() => {
    //console.log("use effect triggered, Mute is ", isMute);
    if (isPlaying) {
      // console.log(audioRef.current.seekable);
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

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <FaPause /> : <FaPlay />}
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
