import { useState } from "react";
import { angleUp, angleDown } from "../../assets";

const SortDropdown = ({ sortBy, onSortChange, items }) => {
  const [showList, setShowList] = useState(false);

  const handleClick = (id) => {
    onSortChange(id);
    setShowList(false);
  };

  return (
    <button
      type="button"
      onClick={() => setShowList(!showList)}
      className="relative flex flex-row justify-between items-center w-full max-w-31 px-3 py-2 bg-bg border border-border-hover rounded-lg text-sm text-text-secondary font-medium cursor-pointer hover:ring-1 hover:ring-border-hover transition-all duration-300 ease-in-out"
    >
      <span>Sort</span>
      <span>
        {showList ? (
          <img
            src={angleUp}
            alt="Arrow Up"
            className="w-5"
          />
        ) : (
          <img
            src={angleDown}
            alt="Arrow Down"
            className="w-5"
          />
        )}
      </span>

      {/* list sortBy */}
      {showList && (
        <ul
          className="absolute mt-2 top-full right-0
     w-full min-w-40 py-1 border border-border-default rounded-xl text-sm text-text-base font-medium cursor-pointer shadow-2xl"
        >
          {items.map((item) => {
            const active = sortBy === item.id;
            return (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`px-3 py-2.5 text-start hover:text-text-primary hover:font-semibold hover:bg-border-default ${
                  active
                    ? "font-semibold text-text-secondary bg-border-default"
                    : "font-medium bg-bg"
                } transition-all duration-300 ease-in-out`}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </button>
  );
};

export default SortDropdown;
