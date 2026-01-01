import {
  inIcon,
  githubIcon,
  instagramIcon,
  youtubeIcon,
  spoIcon,
} from "../../assets";

const Footer = () => {
  const footerItems = [
    {
      id: 1,
      icon: inIcon,
      link: "https://www.linkedin.com/in/alifyazulfazahro/",
    },
    { id: 2, icon: githubIcon, link: "https://github.com/superzupe/" },
    { id: 3, icon: instagramIcon, link: "https://www.instagram.com/zulfaa4c/" },
    { id: 4, icon: youtubeIcon, link: "https://www.youtube.com/@chastazyf33" },
    {
      id: 5,
      icon: spoIcon,
      link: "https://open.spotify.com/user/314zycs2u656frn77r6grqaffc6e",
    },
  ];

  return (
    <div className="bg-footer bottom-0 w-full border-t border-border-default shadow shadow-border-hover">
      <div className="flex flex-col gap-9 justify-center items-center text-center px-14 pt-7 pb-5 md:px-40 ">
        <p className="text-text-secondary font-bold text-lg font-jakarta">
          Sing along without borders — through romanized lyrics.
        </p>

        <div className="flex flex-row gap-3 md:gap-5">
          {footerItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="cursor-pointer"
            >
              <img
                src={item.icon}
                alt="Social Icon"
                className="w-9"
              />
            </a>
          ))}
        </div>

        <p className="text-text-secondary text-sm md:text-base">
          &copy; {new Date().getFullYear()} lyrome — built by{" "}
          <span className="text-text-primary">lunefac</span>♡
        </p>
      </div>
    </div>
  );
};

export default Footer;
