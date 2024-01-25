import { AnimationProps, Variants, animate } from "framer-motion";

export const slideTop = {
  hidden: {
    y: -100,
    opacity: 0.5,
    x: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    x: 0,
  },
  transition: {
    type: "spring",
    stiffness: 500,
  },
};

export const slideRight = {
  hidden: {
    x: 100,
    opacity: 0.5,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  transition: {
    type: "spring",
    stiffness: 500,
  },
};

export const bounceOnHover = {
  animate: {
    fontWeight: "bold",
    transition: {
      type: "spring",
      stiffness: 500,
    },
  },
  hover: {
    scale: 1.25,
  },
};

export const drawPath: Variants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      type: "tween",
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.25,
    },
  },
};

export const drawPathMirror: Variants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      type: "tween",
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
}

