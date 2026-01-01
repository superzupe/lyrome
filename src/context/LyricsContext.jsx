import { createContext } from "react";
import useFetchLyrics from "../hooks/useFetchLyrics";
import * as lyricsService from "../services/lyricsServices";

// eslint-disable-next-line react-refresh/only-export-components
export const LyricsContext = createContext(null);

export const LyricsProvider = ({ children }) => {
  const { lyrics, setLyrics, loading, error } = useFetchLyrics();

  //GET BY ID
  const getLyricById = async (id) => {
    const cached = lyrics.find((l) => String(l.id) === String(id));
    if (cached) return cached;

    return await lyricsService.getLyricById(id);
  };

  //CREATE
  const addLyric = async (payload) => {
    const newLyric = await lyricsService.createLyric(payload); 
    setLyrics((prev) => [newLyric, ...prev]);
  };

  //UPDATE
  const updateLyric = async (id, payload) => {
    const updated = await lyricsService.updateLyric(id, payload);
    setLyrics((prev) => prev.map((l) => (l.id === id ? updated : l)));
  };

  //DELETE
  const deleteLyric = async (id) => {
    await lyricsService.deleteLyric(id);
    setLyrics((prev) => prev.filter((l) => l.id !== id));
  };

  return (
    <LyricsContext.Provider
      value={{ lyrics, loading, error, getLyricById, addLyric, updateLyric, deleteLyric }}
    >
      {children}
    </LyricsContext.Provider>
  );
};
