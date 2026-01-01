import { useEffect, useState } from "react";
import { getLyrics } from "../services/lyricsServices";

const useFetchLyrics = () => {
  const [lyrics, setLyrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLyrics = async () => {
    try {
      const data = await getLyrics();
      setLyrics(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    } 
  };

  useEffect(() => {
    fetchLyrics();
  }, []);

  return {
    lyrics,
    setLyrics, //untuk penggunaan context
    loading,
    error,
    refetch: fetchLyrics,
  };
};

export default useFetchLyrics;
