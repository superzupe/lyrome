import { useEffect, useMemo, useState } from "react";

const FormAdd = ({ onSubmit, initialData, onCancel }) => {
  const defaultForm = useMemo(() => ({
    title: "",
    artist: "",
    thumb: "",
    lyrics: "",
  }), []);
  
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    if (initialData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm({
        title: initialData.title ?? "",
        artist: initialData.artist ?? "",
        thumb:
          initialData.thumb ||
          "https://ssluesdwhncyhegzuzwy.supabase.co/storage/v1/object/public/thum-lyrics/thumb-lyrics-default.png",
        lyrics: initialData.lyrics ?? "",
      });
    } else {
      setForm(defaultForm);
    }
  }, [defaultForm, initialData]);

  const isEmpty = Object.values(form).every((v) => v.trim() === "");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty) return;

    onSubmit(form);
    setForm(defaultForm);
    onCancel?.();
  };

  const handleCancel = () => {
    setForm(defaultForm);
    onCancel?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mb-10 p-8 gap-8 w-full max-w-xs md:max-w-7xl bg-card border border-border-default rounded-xl"
    >
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="flex flex-col w-full max-w-3xl gap-3">
          {/* add course desc */}
          <InputField
            id="title"
            label="Song Title"
            value={form.title}
            onChange={handleChange}
          />
          <InputField
            id="artist"
            label="Artist"
            value={form.artist}
            onChange={handleChange}
          />
          <InputField
            type="url"
            id="thumb"
            label="Thumbnail Link" //ini not required, jadi tambahkan default nya, oke
            required={false}
            value={form.thumb}
            onChange={handleChange}
          />
          <TextAreaDesc
            value={form.lyrics}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* form button */}
      <div className="flex flex-row gap-4 justify-end">
        <ButtonForm
          type="button"
          onClick={handleCancel}
          disabled={false}
          bg="bg-button-bg"
          bgHover="bg-button-hover"
          label="cancel"
        />
        <ButtonForm
          type="submit"
          disabled={isEmpty}
          bg="bg-button-hover"
          bgHover="bg-button-bg"
          label={initialData ? "update" : "save"}
        />
      </div>
    </form>
  );
};

const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = true,
}) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label
        htmlFor={id}
        className="text-sm text-text-secondary md:text-base"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 text-sm md:text-base text-text-primary border border-border-default rounded-md focus:outline-0 focus:ring-2 focus:ring-border-hover focus:border-border-hover transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

const TextAreaDesc = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label
        htmlFor="lyrics"
        className="text-sm text-text-secondary md:text-base"
      >
        Lyrics
      </label>
      <textarea
        id="lyrics"
        name="lyrics"
        rows={20}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-2 text-sm md:text-base text-text-primary border border-border-default rounded-md focus:outline-0 focus:ring-2 focus:ring-border-hover focus:border-border-hover transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

const ButtonForm = ({ type, onClick = "", disabled, bg, bgHover, label }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-3 font-semibold text-sm md:text-base text-button-text ${bg} hover:${bgHover} rounded-lg cursor-pointer transition-all duration-300 ease-in-out`}
    >
      {label}
    </button>
  );
};

export default FormAdd;
