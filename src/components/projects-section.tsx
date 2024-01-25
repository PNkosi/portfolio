import { PiGithubLogo, PiGlobe } from "react-icons/pi";
import Carousel from "./ui/carousel";
import Button from "./ui/button";
import SectionHeader from "./section-header";
import React from "react";
import Link from "next/link";

type Project = {
  images: string[];
  name: string;
  type: "personal" | "client work" | "colaboration";
  techStack: string[];
  description: string;
  liveUrl: string;
  sourceCodeUrl?: string;
};

const projects: Project[] = [
  {
    images: [
      "/projects-images/codecolabs-1.png",
      "/projects-images/codecolabs-2.png",
    ],
    name: "CODECOLABS",
    type: "personal",
    techStack: [
      "TailwindCSS",
      "ReactJs",
      "NextJs",
      "Typescript",
      "PostgreSQL",
      "Sanity Studio",
      "Prisma",
      "Clerk Auth",
    ],
    description: "An online learning platform for beginners in programming",
    liveUrl: "https://codecolabs.org",
  },
  {
    images: ["/projects-images/careerblob-1.png", "/projects-images/careerblob-2.png"],
    name: "Careerblob",
    type: "personal",
    techStack: [
      "TailwindCSS",
      "ReactJs",
      "NextJs",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "Clerk Auth",
    ],
    description: "An online learning platform for beginners in programming",
    liveUrl: "https://careerblob.co.za",
    sourceCodeUrl: "https://github.com/PNkosi",
  },
  {
    images: ["/projects-images/shortly-desktop.png"],
    name: "Shortly",
    type: "personal",
    techStack: [
      "TailwindCSS",
      "ReactJs",
      "NextJs",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "Clerk Auth",
    ],
    description: "An online learning platform for beginners in programming",
    liveUrl: "https://shortly.co.za",
    sourceCodeUrl: "https://github.com/PNkosi",
  },
  {
    images: ["/projects-images/esgodzini-4.png", "/projects-images/esgodzini-2.png", "/projects-images/esgodzini-3.png", "/projects-images/esgodzini-1.png"],
    name: "Esgodzini Production",
    type: "client work",
    techStack: [
      "TailwindCSS",
      "ReactJs",
      "NextJs",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "Clerk Auth",
    ],
    description: "An online learning platform for beginners in programming",
    liveUrl: "https://shortly.co.za",
  },
];

const ProjectsSection = () => {
  return (
    <section className="container py-24 px-4" id="projects">
      <SectionHeader textVariant="dark">Projects I'm working on</SectionHeader>
      <p>I only provide the source code to personal projects</p>

      <div className="mt-12 grid md:grid-cols-2 gap-24">
        {projects.map(({ images, name, liveUrl, sourceCodeUrl }, index) => (
          <div key={index}>
            <Carousel
              images={images}
              showControls={false}
              showLabel={false}
              link={`/project/${name.toLowerCase().replace(" ", "")}`}
            />
            <div className="flex items-center gap-3 my-6">
              <Link href={liveUrl}>
                <Button className="bg-bg-purple text-light-foreground" size="sm">
                  <PiGlobe /> Live Site
                </Button>
              </Link>
              {sourceCodeUrl && (
                <Link href={sourceCodeUrl}>
                  <Button className="bg-dark-foreground text-light-foreground" size="sm">
                    <PiGithubLogo /> Source Code
                  </Button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
