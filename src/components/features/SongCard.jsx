import { useNavigate } from "react-router-dom";
import { trashIcon, pencilIcon } from "../../assets";

const SongCard = ({ item, type = "list", onEdit, onDelete }) => {
  const navigate = useNavigate();
  const isContent = type === "content";
  const isAdmin = type === "admin";

  return (
    <button
      onClick={
        !isContent && !isAdmin
          ? () => navigate(`/results/${item.id}`)
          : undefined
      }
      className={`flex flex-row items-center w-full gap-3 px-3 py-2 bg-card border border-border-default rounded-xl ${
        !isContent && !isAdmin
          ? "hover:border-border-hover hover:ring hover:ring-border-hover rounded-md transition-all duration-300 ease-in-out cursor-pointer"
          : ""
      } `}
    >
      <img
        src={item.thumb}
        alt={item.title}
        className="w-20 md:w-30"
      />
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start text-left">
          <p className="text-text-primary font-bold text-lg font-jakarta">
            {item.title}
          </p>
          <p className="text-text-secondary font-medium">{item.artist}</p>
        </div>
        {isAdmin && (
          <div className="flex flex-row justify-end w-full gap-2">
            <ButtonCard
              bg="bg-orange-200"
              bgHover="hover:bg-orange-300"
              icon={pencilIcon}
              onClick={() => onEdit(item)}
            />
            <ButtonCard
              bg="bg-red-200"
              bgHover="hover:bg-red-300"
              icon={trashIcon}
              onClick={() => onDelete(item.id)}
            />
          </div>
        )}
      </div>
    </button>
  );
};

const ButtonCard = ({ onClick, bg, bgHover, icon, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-row items-center gap-1 p-2 font-medium text-sm text-text-secondary ${bg} ${bgHover} rounded-4xl cursor-pointer transition-all duration-300 ease-in-out`}
    >
      <img
        src={icon}
        alt={label}
        className="w-5"
      />
    </button>
  );
};

export default SongCard;
