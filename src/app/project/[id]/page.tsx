import SectionHeader from "@/components/section-header";
import Button from "@/components/ui/button";
import Carousel from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiGithubLogo, PiGlobe } from "react-icons/pi";

type Props = {};

const images = [
  "/projects-images/esgodzini-4.png",
  "/projects-images/esgodzini-2.png",
  "/projects-images/esgodzini-3.png",
  "/projects-images/esgodzini-1.png",
];

const Project = (props: Props) => {
  return (
    <main className="bg-bg-purple">
      <div className="container">
        <div className="flex items-start gap-12 bg-[url(/grid.svg)] bg-cover bg-center py-24">
          <div className="w-1/2 space-y-4">
            <SectionHeader className="text-white" textVariant="light">
              Esgodzini Productions
            </SectionHeader>
            <h4 className="text-light-foreground">Client Project</h4>
            <p className="text-light-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              excepturi delectus enim animi odit consequatur consectetur
              sapiente in sequi facilis recusandae, voluptate quo repudiandae
              nesciunt repellat ipsum repellendus molestias ab.
            </p>
            <div className="flex items-center gap-3 my-6">
              <Link href="">
                <Button
                  className="bg-dark-purple text-light-foreground"
                  size="sm"
                >
                  <PiGlobe /> Live Site
                </Button>
              </Link>
              <Link href={""}>
                <Button
                  className="bg-dark-foreground text-light-foreground"
                  size="sm"
                >
                  <PiGithubLogo /> Source Code
                </Button>
              </Link>
            </div>
          </div>
          <Carousel images={images} />
        </div>
      </div>
      <section className="bg-white py-24">
        <div className="container">
          <h3>Case Study</h3>
        </div>
      </section>
    </main>
  );
};

export default Project;
