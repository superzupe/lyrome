import { useState } from "react";
import Header from "../components/layout/Header";
import Title from "../components/features/Title";
import FormAdd from "../components/features/FormAdd";
import SongsList from "../components/features/SongsList";
import Footer from "../components/layout/Footer";
import useLyrics from "../hooks/useLyrics";

const AddLyrics = () => {
  const { lyrics, addLyric, updateLyric, deleteLyric } = useLyrics();
  //nanti mau nambahin loading
  const [editing, setEditing] = useState(null);

  const handleCreate = async (payload) => {
    await addLyric(payload);
  };

  const handleUpdate = async (payload) => {
    if (!editing) return;
    await updateLyric(editing.id, payload);
    setEditing(null);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this lyric?")) return;
    await deleteLyric(id);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Title subhead="Add lyrics, break the silence, and let the screen sing with you.">
        Type It, Sing It
      </Title>
      <FormAdd
        onSubmit={editing ? handleUpdate : handleCreate}
        initialData={editing}
        onCancel={() => setEditing(null)}
      />

      {/* card result */}

      {lyrics.length === 0 && (
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-text-secondary">No lyrics yet</p>
        </div>
      )}
      <SongsList
        type="admin"
        lyrics={lyrics}
        onEdit={setEditing}
        onDelete={handleDelete}
      />

      <Footer />
    </div>
  );
};

export default AddLyrics;
