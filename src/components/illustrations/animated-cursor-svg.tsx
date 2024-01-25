"use client"

import { motion } from "framer-motion";

type Props = {};

const AnimatedCursorSVG = () => {
  return (
    <svg
      className="absolute right-0 w-64"
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 151 144.47"
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <rect
            className="fill-bg-purple stroke-light-foreground"
            x="11.5"
            y="11.5"
            width="128"
            height="102"
          />
          <rect
            className="fill-bg-purple stroke-light-foreground"
            x="128.5"
            y="102.5"
            width="22"
            height="22"
          />
          <rect
            className="fill-bg-purple stroke-light-foreground"
            x="128.5"
            y=".5"
            width="22"
            height="22"
          />
          <rect
            className="fill-bg-purple stroke-light-foreground"
            x=".5"
            y=".5"
            width="22"
            height="22"
          />
          <rect
            className="fill-bg-purple stroke-light-foreground"
            x=".5"
            y="102.5"
            width="22"
            height="22"
          />
          <path
            className="stroke-light-foreground"
            d="m90.65,97.13h-30.15v-3.77l.47-.03c9.29-.6,9.65-1.57,9.65-9.02v-48.28h-8.62c-5.39,0-6.8.56-8.38,3.35-1.09,1.82-1.84,3.97-2.98,7.22l-.4,1.15h-3.91l.05-.55c.6-6.05,1.2-12.42,1.5-18.01l.03-.47h3.05l.15.23c1.3,2.07,2.14,2.07,4.66,2.07h.33s39.67,0,39.67,0c2.62,0,3.28-.3,4.72-2.11l.15-.19h3.15v.5c0,4.34.36,11.45.9,17.69l.04.49-3.91.39-.11-.4c-.99-3.52-2.17-6.58-3.15-8.19-1.43-2.41-2.14-3.17-7.69-3.17h-9.52v48.28c0,7.45.55,8.43,9.85,9.02l.47.03v3.77Zm-29.15-1h28.15v-1.84c-9.15-.61-10.32-1.83-10.32-9.99v-49.28h10.52c5.63,0,6.82.73,8.54,3.65.99,1.61,2.15,4.59,3.14,8.03l2.1-.21c-.5-5.91-.83-12.5-.86-16.78h-1.67c-1.53,1.89-2.54,2.3-5.35,2.3h-39.99c-2.52,0-3.83,0-5.36-2.3h-1.56c-.3,5.33-.86,11.31-1.42,17.03h2.1l.17-.48c1.16-3.31,1.93-5.5,3.06-7.4,1.88-3.32,3.86-3.85,9.24-3.85h9.62v49.28c0,8.15-1.15,9.37-10.12,9.98v1.84Z"
          />
          <motion.path
            initial={{ x: 0, y: 0 }}
            animate={{ x: [5, -10], y: [-50, -30], scale: [1, 1.5, 1, 1.5] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}

            className="fill-bg-purple stroke-light-foreground"
            d="m123.03,140.8l-6.31,3.01c-2.64-5.79-5.29-11.58-7.93-17.37-1.83,2.18-3.67,4.36-5.5,6.54l-4.99-35.39,24.34,26.17c-2.8-.23-5.61-.46-8.41-.69l8.8,17.74Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default AnimatedCursorSVG;
