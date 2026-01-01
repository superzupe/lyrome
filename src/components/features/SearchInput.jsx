import { searchIcon } from "../../assets";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="flex flex-row justify-start items-center mb-6 md:mb-6">
    <form className="relative w-full min-w-60 md:max-w-xs">
      <input
        type="text"
        placeholder="Find a song to sing along..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-1 md:py-2 w-full bg-bg text-sm text-text-primary border border-border-hover rounded-md outline-none focus:ring-1 focus:ring-border-hover focus:border-border-hover
        transition-all duration-300 ease-in-out placeholder:text-sm"
      />
      <button
        type="submit"
        className="absolute z-1 right-1 top-1 md:right-1.5 md:top-1.5 cursor-pointer"
      >
        <img
          src={searchIcon}
          alt="Search Icon"
          className="w-5 md:w-6"
        />
      </button>
    </form>
    </div>
  );
};

export default SearchInput;
