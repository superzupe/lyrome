import { useContext } from "react";
import { LyricsContext } from "../context/LyricsContext";

const useLyrics = () => {
  const context = useContext(LyricsContext);

  if (!context) {
    throw new Error("useLyrics must be used inside LyricsProvider");
  }

  return context;
};

export default useLyrics;
 