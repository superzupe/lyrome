// SongsList.jsx
import SongCard from "./SongCard";
import SearchInput from "./SearchInput";
import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination";
import { useState, useMemo, useEffect, useRef } from "react";

const ITEMS_PER_PAGE = 20;

const sortItems = [
  { id: "latest_added", label: "Latest Added" },
  { id: "first_added", label: "First Added" },
  { id: "title_az", label: "Title A → Z" },
  { id: "title_za", label: "Title Z → A" },
  { id: "artist_az", label: "Artist A → Z" },
  { id: "artist_za", label: "Artist Z → A" },
];

const SongsList = ({ type, lyrics, onEdit, onDelete }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(""); // state untuk sort
  const listRef = useRef(null);

  // FILTER + SORT
  const filteredLyrics = useMemo(() => {
    let temp = [...lyrics];

    // SEARCH
    if (search.trim() !== "") {
      const words = search.toLowerCase().split(" ");
      temp = temp.filter((item) =>
        words.every(
          (word) =>
            item.title.toLowerCase().includes(word) ||
            item.artist.toLowerCase().includes(word)
        )
      );
    }

    // SORT
    if (sortBy) {
      temp.sort((a, b) => {
        switch (sortBy) {
          case "latest_added":
            return new Date(b.created_at) - new Date(a.created_at); // terakhir ditambahkan
          case "first_added":
            return new Date(a.created_at) - new Date(b.created_at); // pertama ditambahkan
          case "title_az":
            return a.title.localeCompare(b.title);
          case "title_za":
            return b.title.localeCompare(a.title);
          case "artist_az":
            return a.artist.localeCompare(b.artist);
          case "artist_za":
            return b.artist.localeCompare(a.artist);
          default:
            return 0;
        }
      });
    }

    return temp;
  }, [lyrics, search, sortBy]);

  // reset page saat search berubah
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setPage(1), [search]);

  // scroll ke atas page saat page berubah
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // PAGINATION
  const totalPages = Math.ceil(filteredLyrics.length / ITEMS_PER_PAGE);
  const paginatedLyrics = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredLyrics.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredLyrics, page]);

  return (
    <div className="min-h-screen flex flex-col justify-between mb-20">
      <div>
        <div className="flex flex-row justify-center items-center md:justify-between gap-2 mb-6">
          <SearchInput
            value={search}
            onChange={setSearch}
          />

          <SortDropdown
            sortBy={sortBy}
            onSortChange={setSortBy}
            items={sortItems}
          />
        </div>

        {filteredLyrics.length === 0 && (
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-text-secondary">No lyrics yet</p>
          </div>
        )}

        <div
          ref={listRef}
          className="flex flex-col md:grid md:grid-cols-2 items-center gap-3 md:gap-5 mb-9 w-full max-w-90 md:min-w-7xl"
        >
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

      <div className="mt-10 flex justify-center">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default SongsList;
