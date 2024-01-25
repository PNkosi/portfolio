import SectionHeader from "./section-header";
import LightBulbAnimation from "./animated-illustrations/light-bulb";

const AboutSection = () => {
  return (
    <section
      className="container px-4 py-24 flex flex-col md:flex-row gap-6"
      id="about"
    >
      <div className="w-fit">
        <SectionHeader textVariant="dark">who i am & what i do</SectionHeader>
        <p className="leading-relaxed text-justify text-dark-foreground md:w-2/3">
          Hello there! 👋 I'm Perfect Nkosi, a passionate web developer with a
          knack for turning ideas into interactive and visually stunning digital
          experiences. My journey in the ever-evolving world of web development
          has equipped me with a diverse skill set, and I thrive on bringing
          creativity and functionality together.
        </p>
        <p className="mt-4 leading-relaxed text-justify text-dark-foreground md:w-2/3">
          I am currently doing my final year in Diploma in ICT(Applications Development).
        </p>
      </div>
      <LightBulbAnimation className="hidden md:block w-1/2" />
    </section>
  );
};

export default AboutSection;
