import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Player from "./components/Player/Player";
import { tracks } from "./data/tracks";
import Landing from "./components/Landing/Landing";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [showLandingPage, setShowLandingPage] = useState(true);

  const setNextTrack = () => {
    console.log("im here");
    if (trackIndex < tracks.length) setTrackIndex(trackIndex + 1);
  };

  const setPreviousTrack = () => {
    console.log("im here");
    if (trackIndex > 0) setTrackIndex(trackIndex - 1);
  };

  useEffect(() => {
    if (trackIndex < tracks.length) setCurrentTrack(tracks[trackIndex]);
    console.log("in use effect");
  }, [trackIndex]);

  useEffect(() => {
    setTimeout(() => {
      setShowLandingPage(false);
    }, 3000);
  }, []);

  return (
    <div className="main">
      <AnimatePresence mode="popLayout">
        {showLandingPage ? (
          <motion.div
            key="landing"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: -1000,
              opacity: 1,
              transition: { duration: 4, delay: 2 },
            }}
            className="landing"
          >
            <Landing />
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 1000, opacity: 1 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 3, delay: 1 },
            }}
            style={{
              backgroundImage: `url(${currentTrack.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
            className="player"
          >
            <Player
              currentTrack={currentTrack}
              setNextTrack={setNextTrack}
              setPreviousTrack={setPreviousTrack}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
