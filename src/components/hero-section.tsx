import HeroIllustration from "./animated-illustrations/hero-illustration";

const HeroSection = () => {
  return (
    <header className="relative bg-bg-purple py-24">
      <div className="container relative">
        <div className="z-20 text-center text-white md:py-4">
          <p className="text-2xl mb-4">I'm</p>
          <h1 className="uppercase text-4xl md:text-6xl">Perfect Nkosi</h1>
        </div>
        {/* <img src="/hero-illustration.svg" /> */}
        <HeroIllustration />
      </div>
    </header>
  );
};

export default HeroSection;
