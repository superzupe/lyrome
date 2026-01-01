const Title = ({ children, subhead = "" }) => {
  return (
    <div className="mt-20 mb-5 md:mt-30 px-3.5 flex flex-col gap-2 md:gap-4 md:justify-center text-left w-full max-w-2xl md:max-w-7xl">
      <h1 className="font-black font-jakarta text-2xl md:text-5xl text-text-header">
        {children}
      </h1>
      <p className="font-medium font-jakarta text-base md:text-lg text-text-secondary">{subhead}</p>
    </div>
  );
};

export default Title;
