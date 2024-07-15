/* eslint-disable react/prop-types */

import styles from "./DisplayTrack.module.scss";
function DisplayTrack({ currentTrack, audioRef }) {
  return (
    <div className={styles.displayTrack}>
      <div
      // style={{
      //   backgroundImage: `url(${currentTrack.img})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   height: "100%",
      //   width: "100%",
      // }}
      ></div>
      <h2>{currentTrack.title}</h2>
      <audio src={currentTrack.src} ref={audioRef} />
    </div>
  );
}

export default DisplayTrack;
