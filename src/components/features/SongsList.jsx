import SongCard from "./SongCard";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";
import { useState, useMemo, useEffect } from "react";

const ITEMS_PER_PAGE = 20;

const SongsList = ({ type, lyrics, onEdit, onDelete }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  //FILTER
  const filteredLyrics = useMemo(() => {
    if (!search.trim()) return lyrics;

    const words = search.toLowerCase().split(" ");

    return lyrics.filter((item) =>
      words.every(
        (word) =>
          item.title.toLowerCase().includes(word) ||
          item.artist.toLowerCase().includes(word)
      )
    );
  }, [lyrics, search]);

  //reset page saat search berubah
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
  }, [search]);

  //PAGINATION
  const totalPages = Math.ceil(filteredLyrics.length / ITEMS_PER_PAGE);

  const paginatedLyrics = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredLyrics.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredLyrics, page]);

  return (
    <div className="min-h-screen flex flex-col justify-between mb-20">
      <div>
        <SearchInput
          value={search}
          onChange={setSearch}
        />

        {filteredLyrics.length === 0 && (
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-text-secondary">No lyrics yet</p>
          </div>
        )}
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-3 md:gap-5 mb-9 w-full min-w-xs max-w-xs md:min-w-7xl">
          {paginatedLyrics.map((lyric) => (
            <SongCard
              key={lyric.id}
              item={lyric}
              type={type}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>

      
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
 
    </div>
  );
};

export default SongsList;
