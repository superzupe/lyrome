import { angleLeft, angleRight } from "../../assets/index";

const Pagination = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-row gap-2 justify-center items-center mt-10">
      <ButtonArrow
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        icon={angleLeft}
      />

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className=" w-10 p-2 bg-border-default text-text-primary text-lg font-semibold rounded-sm"
        >
          {pageNumber}
        </button>
      ))}

      <ButtonArrow
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        icon={angleRight}
      />
    </div>
  );
};

const ButtonArrow = ({ disabled, onClick, icon }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="p-2 bg-border-secondary rounded-sm"
    >
      <img
        src={icon}
        alt="Arrow"
        className="w-7"
      />
    </button>
  );
};

export default Pagination;
