/* eslint-disable react/prop-types */
function DisplayTrack({ currentTrack, audioRef }) {
  return (
    <div>
      <h2>{currentTrack.title}</h2>
      <audio src={currentTrack.src} ref={audioRef} />
    </div>
  );
}

export default DisplayTrack;
