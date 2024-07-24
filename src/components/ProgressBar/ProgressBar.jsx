/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function ProgressBar({
  audioRef,
  progressBarRef,
  totalDuration,
  timeProgress,
}) {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTimeInMins, setCurrentTimeInMins] = useState("00:00");

  const [totalDurationInMins, setTotalDurationInMins] = useState("00:00");

  useEffect(() => {
    if (audioRef.current) {
      //setTotalDuration(audioRef.current.duration);
      console.log("Total duration in Progressbar: ", totalDuration);
      //calculateTotalDuration();
      setTotalDurationInMins(formatTime(totalDuration));
      setCurrentTimeInMins(formatTime(timeProgress));
      console.log("Time progress: ", timeProgress);
      //console.log("current time ", currentTimeInMins);
    }
  }, [totalDuration, timeProgress]);

  useEffect(() => {
    audioRef.current.currentTime = currentTime;
    // const intervalId = setInterval(() => {
    //   setCurrentTime(audioRef.current.currentTime);
    //   calculateCurrentTimeInMins();
    // }, 5000);

    // return () => {
    //   clearInterval(intervalId);
    // };
    updateCurrentTime();
  }, [currentTime]);

  useEffect(() => {
    setCurrentTime(0);
  }, []);

  const updateCurrentTime = () => {
    // setTimeout(() => {
    //   console.log("im in timeout");
    //   setCurrentTime(audioRef.current.currentTime);
    //   calculateCurrentTimeInMins();
    //   updateCurrentTime();
    // }, 1000);
  };

  const calculateCurrentTimeInMins = () => {
    const mins = Math.floor(currentTime / 60);
    const secs = Math.floor(currentTime % 60);
    setCurrentTimeInMins(mins + ":" + secs);
  };
  const calculateTotalDuration = () => {
    const mins = Math.floor(totalDuration / 60);
    const secs = Math.floor(totalDuration % 60);

    setTotalDurationInMins(mins + ":" + secs);
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className="progress">
      <span className="time current">{currentTimeInMins}</span>
      <input
        type="range"
        min={0}
        max={totalDuration}
        value={timeProgress}
        ref={progressBarRef}
        onChange={(e) => setCurrentTime(e.target.value)}
      />
      <span className="time">{totalDurationInMins}</span>
    </div>
  );
}

export default ProgressBar;
