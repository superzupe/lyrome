import Header from "../components/layout/Header";
import SongCard from "../components/features/SongCard";
import LyricsContent from "../components/features/LyricsContent";
import Footer from "../components/layout/Footer";
import useLyrics from "../hooks/useLyrics";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const LyricsPage = () => {
  const { id } = useParams(); // ✅ FIX
  const { lyrics, getLyricById, loading } = useLyrics();
  const [lyric, setLyric] = useState(null);

  useEffect(() => {
    const load = async () => {
      const cached = lyrics.find((l) => String(l.id) === id);
      if (cached) {
        setLyric(cached);
        return;
      }

      // ✅ FALLBACK
      const data = await getLyricById(id);
      setLyric(data);
    };

    load();
  }, [getLyricById, id, lyrics]);

  if (loading || !lyric) {
    return (
      <div className="flex flex-col justify-center items-center">
        <Header />
        <div className="min-h-screen flex flex-col justify-center items-center">
          <p className="text-text-secondary">Loading lyrics...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="min-h-screen mt-25 md:mt-32">
        <div className="flex flex-col items-start md:items-center justify-start gap-3 mb-9 w-full max-w-90 md:min-w-5xl">
          <SongCard
            item={lyric}
            type="content"
          />
          <LyricsContent item={lyric} />
        </div>

        {/* butuh sidebar list song lain gak? butuh bisa, tapi kecil , aku bingung kalo ditaruh di mobile ver😊🙏 */}
      </div>
      <Footer />
    </div>
  );
};

export default LyricsPage;
