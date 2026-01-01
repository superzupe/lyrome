import { pageNotFound } from "../assets";

const NotFound = () => { 
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-10 md:gap-30 justify-center items-center text-center">
      <img src={pageNotFound} alt="Page Not Found Image" className="w-50 md:w-120 rounded-full"/>
      <div className="flex flex-col gap-3 md:gap-5 justify-center items-center text-center">
        <h1 className="font-jakarta text-4xl md:text-9xl font-black text-shadow-text-primary">
          404
        </h1>
        <p className="font-jakarta text-xl md:text-5xl font-bold text-text-primary">
          Oops! Page not found.
        </p>
        <a
          href="/"
          className="font-jakarta text-md md:text-2xl font-bold text-text-secondary"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
