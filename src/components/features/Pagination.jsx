// Pagination.jsx
import { useState, useEffect } from "react";
import { angleLeft, angleRight } from "../../assets/index";

const Pagination = ({ page, totalPages, onPageChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  // cek apakah mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const limit = isMobile ? 5 : 10;

  // hitung startPage & endPage
  let startPage = Math.max(1, page - Math.floor(limit / 2));
  let endPage = startPage + limit - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - limit + 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    onPageChange(p);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-row gap-2 justify-center items-center mt-10">
      <ButtonArrow
        disabled={page === 1}
        onClick={() => goToPage(page - 1)}
        icon={angleLeft}
      />

      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => goToPage(pageNumber)}
          className={`w-10 h-10 text-lg font-semibold rounded-sm transition-all duration-200 ease-in-out cursor-pointer
            ${
              pageNumber === page
                ? "bg-border-default text-text-primary "
                : "bg-card text-text-primary hover:bg-border-hover"
            }`}
        >
          {pageNumber}
        </button>
      ))}

      <ButtonArrow
        disabled={page === totalPages}
        onClick={() => goToPage(page + 1)}
        icon={angleRight}
      />
    </div>
  );
};

const ButtonArrow = ({ disabled, onClick, icon }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className="p-2 bg-border-secondary hover:bg-border-hover rounded-sm transition-all duration-200 ease-in-out cursor-pointer"
  >
    <img
      src={icon}
      alt="Arrow"
      className="w-7"
    />
  </button>
);

export default Pagination;
