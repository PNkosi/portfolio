"use client";

import { drawPath } from "@/lib/framer-motion-variants";
import { motion } from "framer-motion";

type Props = {};

const SkillsSectionIllustration = (props: Props) => {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 343.69 174.63"
      className="md:w-1/2 bg-bg-purple border-light-foreground md:border-2 rounded-3xl p-2"
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          {/* LAPTOP */}
          <g>
            <polygon
              strokeMiterlimit={10}
              className="fill-bg-purple stroke-light-foreground"
              points="188.74 141.53 197.58 157.52 342.78 174.03 333.94 158.04 188.74 141.53"
            />
            <motion.line
              className="fill-none stroke-light-foreground"
              strokeMiterlimit={10}
              x1="189.26"
              y1="153.28"
              x2="122.4"
              y2="36.28"
            />
          </g>

          {/* SCREEN LIGHTS */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <motion.line
              className="fill-none stroke-light-foreground"
              strokeMiterlimit={10}
              x1="153.26"
              y1="54.28"
              x2="189.26"
              y2=".28"
            />
            <motion.line
              className="fill-none stroke-light-foreground"
              strokeMiterlimit={10}
              x1="161.76"
              y1="71.78"
              x2="233.76"
              y2="44.78"
            />
            <motion.line
              className="fill-none stroke-light-foreground"
              strokeMiterlimit={10}
              x1="170.76"
              y1="89.78"
              x2="242.76"
              y2="98.78"
            />
          </motion.g>

          {/* CODE LINES */}
          <motion.g
            initial={{ y: 0 }}
            animate={{ y: -50 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.25,
                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#8c85ff]"
              x1="9.26"
              y1="45.28"
              x2="54.26"
              y2="45.28"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.5,

                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#7ac943]"
              x1="9.26"
              y1="54.78"
              x2="54.26"
              y2="54.78"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.25,

                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#8c85ff]"
              x1="72.26"
              y1="53.78"
              x2="117.26"
              y2="53.78"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.5,

                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#22b573]"
              x1="63.26"
              y1="45.78"
              x2="108.26"
              y2="45.78"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.25,

                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#22b573]"
              x1="18.26"
              y1="63.28"
              x2="63.26"
              y2="63.28"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.35,

                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#8c85ff]"
              x1="18.26"
              y1="72.78"
              x2="63.26"
              y2="72.78"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.5,

                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#7ac943]"
              x1="81.26"
              y1="71.78"
              x2="126.26"
              y2="71.78"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.25,

                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#7ac943]"
              x1="72.26"
              y1="63.78"
              x2="117.26"
              y2="63.78"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.75,

                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#7ac943]"
              x1=".26"
              y1="81.28"
              x2="45.26"
              y2="81.28"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.5,

                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#7ac943]"
              x1=".26"
              y1="90.78"
              x2="45.26"
              y2="90.78"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.5,

                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#8c85ff]"
              x1="63.26"
              y1="89.78"
              x2="108.26"
              y2="89.78"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.75,

                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#22b573]"
              x1="54.26"
              y1="81.78"
              x2="99.26"
              y2="81.78"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.5,

                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#22b573]"
              x1="27.26"
              y1="99.28"
              x2="72.26"
              y2="99.28"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  delay: 0.25,
                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#8c85ff]"
              x1="27.26"
              y1="108.78"
              x2="72.26"
              y2="108.78"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#7ac943]"
              x1="90.26"
              y1="107.78"
              x2="135.26"
              y2="107.78"
            />
            <motion.line
              variants={drawPath}
              initial="initial"
              animate={{
                pathLength: 1,
                transition: {
                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.25,
                },
              }}
              strokeMiterlimit={10}
              className="fill-none stroke-[#8c85ff]"
              x1="81.26"
              y1="99.78"
              x2="126.26"
              y2="99.78"
            />
          </motion.g>

          {/* SKILLS TEXT */}
          <g>
            <motion.polygon
              variants={drawPath}
              initial="initial"
              animate="animate"
              className="fill-none stroke-light-foreground "
              strokeWidth={0.5}
              points=".25 138.96 14.43 145.02 14.43 142.4 3.19 137.74 14.43 133.13 14.43 130.51 .25 136.5 .25 138.96"
            />
            <motion.path
              variants={drawPath}
              initial="initial"
              animate="animate"
              className="fill-none stroke-light-foreground "
              strokeWidth={0.5}
              d="m39.13,137.04c-.86-.39-2.44-.84-4.74-1.37s-3.73-1.03-4.27-1.53c-.55-.5-.83-1.13-.83-1.9,0-.89.39-1.64,1.18-2.27s2.03-.94,3.75-.94,2.89.35,3.73,1.04,1.34,1.71,1.48,3.07l2.72-.2c-.05-1.26-.4-2.38-1.05-3.37s-1.58-1.75-2.8-2.26-2.61-.77-4.2-.77c-1.44,0-2.75.24-3.93.73s-2.07,1.2-2.69,2.14-.92,1.95-.92,3.03c0,.98.25,1.87.75,2.67s1.26,1.46,2.29,1.99c.79.42,2.17.86,4.13,1.34s3.24.82,3.81,1.04c.9.34,1.54.76,1.93,1.26s.58,1.09.58,1.76-.2,1.27-.61,1.83-1.02,1-1.85,1.32-1.78.48-2.86.48c-1.22,0-2.31-.21-3.29-.64s-1.69-.98-2.15-1.66-.76-1.57-.88-2.64l-2.67.23c.04,1.43.43,2.71,1.18,3.85s1.77,1.98,3.08,2.55,2.93.85,4.87.85c1.53,0,2.9-.28,4.13-.84s2.16-1.34,2.81-2.35.98-2.08.98-3.22-.3-2.16-.89-3.05-1.51-1.61-2.76-2.18Z"
            />
            <motion.polygon
              variants={drawPath}
              initial="initial"
              animate="animate"
              className="fill-none stroke-light-foreground "
              strokeWidth={0.5}
              points="63.84 126.91 60 126.91 49.37 137.52 49.37 126.91 46.53 126.91 46.53 148.32 49.37 148.32 49.37 140.9 52.87 137.48 60.49 148.32 64.23 148.32 54.86 135.58 63.84 126.91"
            />
            <motion.rect
              variants={drawPath}
              initial="initial"
              animate="animate"
              className="fill-none stroke-light-foreground "
              strokeWidth={0.5}
              x="67.08"
              y="126.91"
              width="2.83"
              height="21.41"
            />
            <motion.polygon
              variants={drawPath}
              initial="initial"
              animate="animate"
              className="fill-none stroke-light-foreground "
              strokeWidth={0.5}
              points="77.63 126.91 74.79 126.91 74.79 148.32 88.17 148.32 88.17 145.79 77.63 145.79 77.63 126.91"
            />
            <motion.polygon
              variants={drawPath}
              initial="initial"
              animate="animate"
              className="fill-none stroke-light-foreground "
              strokeWidth={0.5}
              points="94.26 126.91 91.43 126.91 91.43 148.32 104.81 148.32 104.81 145.79 94.26 145.79 94.26 126.91"
            />
            <motion.path
              variants={drawPath}
              initial="initial"
              animate="animate"
              className="fill-none stroke-light-foreground "
              strokeWidth={0.5}
              d="m120.61,137.04c-.86-.39-2.44-.84-4.74-1.37s-3.73-1.03-4.27-1.53c-.55-.5-.83-1.13-.83-1.9,0-.89.39-1.64,1.18-2.27s2.03-.94,3.75-.94,2.89.35,3.73,1.04,1.34,1.71,1.48,3.07l2.72-.2c-.05-1.26-.4-2.38-1.05-3.37s-1.58-1.75-2.8-2.26-2.61-.77-4.2-.77c-1.44,0-2.75.24-3.93.73s-2.07,1.2-2.69,2.14-.92,1.95-.92,3.03c0,.98.25,1.87.75,2.67s1.26,1.46,2.29,1.99c.79.42,2.17.86,4.13,1.34s3.24.82,3.81,1.04c.9.34,1.54.76,1.93,1.26s.58,1.09.58,1.76-.2,1.27-.61,1.83-1.02,1-1.85,1.32-1.78.48-2.86.48c-1.22,0-2.31-.21-3.29-.64s-1.69-.98-2.15-1.66-.76-1.57-.88-2.64l-2.67.23c.04,1.43.43,2.71,1.18,3.85s1.77,1.98,3.08,2.55,2.93.85,4.87.85c1.53,0,2.9-.28,4.13-.84s2.16-1.34,2.81-2.35.98-2.08.98-3.22-.3-2.16-.89-3.05-1.51-1.61-2.76-2.18Z"
            />
            <motion.polygon
              variants={drawPath}
              initial="initial"
              animate="animate"
              className="fill-none stroke-light-foreground "
              strokeWidth={0.5}
              points="134.13 148.68 136.25 148.68 142.44 126.54 140.34 126.54 134.13 148.68"
            />
            <motion.polygon
              variants={drawPath}
              initial="initial"
              animate="animate"
              className="fill-none stroke-light-foreground "
              strokeWidth={0.5}
              points="144.08 130.51 144.08 133.13 155.31 137.74 144.08 142.4 144.08 145.02 158.26 138.96 158.26 136.5 144.08 130.51"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SkillsSectionIllustration;
