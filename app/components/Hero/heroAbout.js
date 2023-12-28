const HeroAbout = () => {
  return (
    <div className="relative h-full p-40">
      <div className="absolute inset-0 bg-[url('/images/waves.svg')] bg-repeat opacity-40 z-10"></div>
      <div className="relative z-20">
        <h1 className="font-bold text-9xl md:text-7xl text-center">
          What can we do to help?
        </h1>
        <p className="text-center text-5xl">info@penochiostudios.com</p>
      </div>
    </div>
  );
};

export default HeroAbout;
