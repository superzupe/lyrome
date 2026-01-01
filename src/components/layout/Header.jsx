import { useState } from "react";
import { Link } from "react-router-dom";
import { barsIcon, logo } from "../../assets";

const Header = () => {
  return (
    <div className="fixed top-0 z-20 flex flex-row px-5 py-2 bg-bg justify-between  md:justify-around items-center w-full ">
      <Logo />

      <NavMenu />
    </div>
  );
};

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="Logo Lyrome"
        className="w-36 md:w-59"
      />
    </Link>
  );
};

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        <img
          src={barsIcon}
          alt="Menu"
          className="w-5"
        />
      </button>
      {isOpen && (
        <Link
          to="/add-page"
          className="absolute z-30 top-8 right-1 w-24 px-3 py-2 bg-bg text-sm hover:font-semibold text-text-secondary border border-border-default rounded-sm shadow shadow-border-hover transition-all duration-300 ease-in-out cursor-pointer"
        >
          Add Lyrcs
        </Link>
      )}
    </div>
  );
};

export default Header;
