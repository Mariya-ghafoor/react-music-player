/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

function Controls({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVolumeBar, setShowVolumeBar] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      // console.log(audioRef.current.seekable);
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button>
        <FaVolumeUp
          onClick={() => {
            console.log("clicked: ", showVolumeBar);
            setShowVolumeBar(!showVolumeBar);
          }}
        />
      </button>
      {showVolumeBar && <input type="range" min={0} max={100} />}
    </div>
  );
}

export default Controls;
