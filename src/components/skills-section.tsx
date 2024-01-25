import SkillsSectionIllustration from "./animated-illustrations/skills-svg";
import SectionHeader from "./section-header";
import { skills } from "@/lib/portfolio-data";


const SkillsSection = () => {
  return (
    <section
      className="bg-[url(/bg-grid.svg)] bg-cover bg-fixed bg-bg-purple py-24 px-4"
      id="skills"
    >
      <div className="container flex flex-col md:flex-row gap-8">
        <SkillsSectionIllustration />
        <div className="md:w-2/3">
          <SectionHeader textVariant="light">
            I got experience with these languages and tools
          </SectionHeader>

          {/* DEV SKILLS */}
          <ul className="mt-6 grid grid-cols-3 gap-6 bg-dark-purple p-4 rounded-3xl">
          {skills.dev.map(({ icon: Icon, label }, index) => (
              <li key={index}
              className="flex flex-col items-center text-light-foreground"
            >
              <Icon size={30}/> {label}
            </li>
            ))}
          </ul>

          {/* DESIGN SKILLS */}
          <ul className="mt-6 grid grid-cols-3 gap-6 bg-dark-purple p-4 rounded-3xl">
            {skills.design.map(({ icon: Icon, label }, index) => (
              <li key={index}
              className="flex flex-col items-center text-light-foreground"
            >
              <Icon size={30}/> {label}
            </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
