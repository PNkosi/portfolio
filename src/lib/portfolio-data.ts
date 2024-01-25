import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoBootstrap,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoFigma,
  BiLogoGit,
  BiLogoSass,
  BiLogoJava,
} from "react-icons/bi";

import { GiAlienFire } from 'react-icons/gi'

import type { IconType } from "react-icons";


type MenuLinkType = {
  label: string;
  href: string;
  icon?: IconType;
};

export const menuLinks: MenuLinkType[] = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Skills",
    href: "/#skills",
  },
  {
    label: "Projects",
    href: "/#projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];


type Skill = {
  icon: IconType;
  label: string;
};

type Skills = {
  dev: Skill[];
  design: Skill[];
};

export const skills: Skills = {
  dev: [
    {
      icon: BiLogoHtml5,
      label: "HTML",
    },
    {
      icon: BiLogoCss3,
      label: "CSS",
    },
    {
      icon: BiLogoSass,
      label: "SASS",
    },
    {
      icon: BiLogoBootstrap,
      label: "Bootstrap",
    },
    {
      icon: BiLogoTailwindCss,
      label: "TailwindCSS",
    },
    {
      icon: BiLogoReact,
      label: "React Js",
    },
    {
      icon: BiLogoJavascript,
      label: "Javascript",
    },
    {
      icon: BiLogoTypescript,
      label: "Typescript",
    },
    {
      icon: BiLogoJava,
      label: "Java"
    },
    {
      icon: BiLogoPostgresql,
      label: "PostgreSQL",
    },
  ],
  design: [
    {
      icon: BiLogoFigma,
      label: "Figma",
    },
    {
      icon: BiLogoGit,
      label: "Git Version Control",
    }
  ],
};
