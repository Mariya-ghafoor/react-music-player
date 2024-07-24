/* eslint-disable react/prop-types */

import styles from "./DisplayTrack.module.scss";

function DisplayTrack({
  currentTrack,
  audioRef,
  progressBarRef,
  setTotalDuration,
}) {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setTotalDuration(seconds);
    progressBarRef.current.max = seconds;
  };
  return (
    <div className={styles.displayTrack}>
      <h2>{currentTrack.title}</h2>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />
    </div>
  );
}

export default DisplayTrack;
