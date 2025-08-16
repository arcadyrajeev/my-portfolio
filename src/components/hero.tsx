const Hero = () => {
  return (
    <div
      className="flex w-full h-[80dvh] bg-background transition-[colors, transform] duration-300 ease-in-out"
      id="hero"
    >
      <div className="flex w-[80vw] h-fit self-end flex-col px-[4vw]">
        <h2 className="flex text-[2vw] text-primary-text ">Rajeev Das</h2>
        <h1 className="flex text-[9vw] text-primary-text leading-40 ">
          Web Designer & Developer
        </h1>
      </div>
    </div>
  );
};

export default Hero;
