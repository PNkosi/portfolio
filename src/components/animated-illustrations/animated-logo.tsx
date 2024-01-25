import { motion } from "framer-motion";
import { drawPath } from "@/lib/framer-motion-variants";

type Props = {};

const AnimatedLogo = () => {
  return (
    <motion.svg
      animate={{ origin: 0 }}
      transition={{ type: "spring", stiffness: 500 }}
      whileHover={{
        scale: 1.1,
      }}
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 151.87 18.27"
      width={200}
      height={50}
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <g>
            <g>
              <motion.line
                variants={drawPath}
                initial="initial"
                animate="animate"
                className="fill-none stroke-light-foreground"
                strokeWidth={2}
                strokeMiterlimit={10}
                x1="94.58"
                y1="3.63"
                x2="89.08"
                y2="9.13"
              />
              <motion.line
                variants={drawPath}
                initial="initial"
                animate="animate"
                className="fill-none stroke-light-foreground"
                strokeWidth={2}
                strokeMiterlimit={10}
                x1="89.08"
                y1="8.63"
                x2="94.58"
                y2="14.13"
              />
            </g>
            <g>
              <motion.line
                variants={drawPath}
                initial="initial"
                animate="animate"
                className="fill-none stroke-light-foreground"
                strokeWidth={2}
                strokeMiterlimit={10}
                x1="103.08"
                y1="3.63"
                x2="108.58"
                y2="9.13"
              />
              <motion.line
                variants={drawPath}
                initial="initial"
                animate="animate"
                className="fill-none stroke-light-foreground"
                strokeWidth={2}
                strokeMiterlimit={10}
                x1="108.58"
                y1="8.63"
                x2="103.08"
                y2="14.13"
              />
            </g>
            <motion.line
              variants={drawPath}
              initial="initial"
              animate="animate"
              className="fill-none stroke-light-foreground"
              strokeWidth={2}
              strokeMiterlimit={10}
              x1="96.33"
              y1="18.13"
              x2="101.33"
              y2=".13"
            />
          </g>
          <motion.path
            variants={drawPath}
            initial="initial"
            animate="animate"
            strokeWidth={0.5}
            className="fill-none stroke-light-foreground"
            d="m0,15.7V2.57h4.95c.87,0,1.54.04,2,.13.65.11,1.19.31,1.62.61.44.3.79.72,1.05,1.27.27.54.4,1.14.4,1.79,0,1.12-.36,2.06-1.07,2.84-.71.77-2,1.16-3.85,1.16H1.74v5.34H0Zm1.74-6.89h3.4c1.12,0,1.92-.21,2.39-.63.47-.42.71-1.01.71-1.77,0-.55-.14-1.02-.42-1.41s-.64-.65-1.1-.77c-.29-.08-.83-.12-1.62-.12H1.74v4.69Z"
          />
          <motion.path
            variants={drawPath}
            initial="initial"
            animate="animate"
            strokeWidth={0.5}
            className="fill-none stroke-light-foreground"
            d="m12.27,15.7V2.57h9.5v1.55h-7.76v4.02h7.27v1.54h-7.27v4.47h8.06v1.55h-9.8Z"
          />
          <motion.path
            variants={drawPath}
            initial="initial"
            animate="animate"
            strokeWidth={0.5}
            className="fill-none stroke-light-foreground"
            d="m24.5,15.7V2.57h5.82c1.17,0,2.06.12,2.67.35.61.24,1.1.65,1.46,1.25.36.6.55,1.26.55,1.98,0,.93-.3,1.72-.91,2.36-.6.64-1.54,1.05-2.8,1.22.46.22.81.44,1.05.65.51.47.99,1.05,1.44,1.75l2.28,3.57h-2.19l-1.74-2.73c-.51-.79-.93-1.39-1.25-1.81-.33-.42-.62-.71-.88-.88-.26-.17-.52-.28-.79-.35-.2-.04-.52-.06-.97-.06h-2.02v5.83h-1.74Zm1.74-7.34h3.74c.79,0,1.42-.08,1.86-.25.45-.16.79-.43,1.02-.79.23-.36.35-.75.35-1.18,0-.62-.23-1.13-.68-1.53-.45-.4-1.16-.6-2.14-.6h-4.16v4.35Z"
          />
          <motion.path
            variants={drawPath}
            initial="initial"
            animate="animate"
            strokeWidth={0.5}
            className="fill-none stroke-light-foreground"
            d="m37.82,15.7V2.57h8.86v1.55h-7.12v4.07h6.16v1.55h-6.16v5.97h-1.74Z"
          />
          <motion.path
            variants={drawPath}
            initial="initial"
            animate="animate"
            strokeWidth={0.5}
            className="fill-none stroke-light-foreground"
            d="m48.97,15.7V2.57h9.5v1.55h-7.76v4.02h7.27v1.54h-7.27v4.47h8.06v1.55h-9.8Z"
          />
          <motion.path
            variants={drawPath}
            initial="initial"
            animate="animate"
            strokeWidth={0.5}
            className="fill-none stroke-light-foreground"
            d="m70.55,11.1l1.74.44c-.36,1.43-1.02,2.52-1.97,3.27s-2.1,1.12-3.47,1.12-2.57-.29-3.45-.86c-.89-.58-1.56-1.41-2.02-2.5-.46-1.09-.69-2.27-.69-3.52,0-1.37.26-2.56.78-3.58.52-1.02,1.27-1.79,2.23-2.32.96-.53,2.03-.79,3.19-.79,1.31,0,2.42.33,3.32,1s1.52,1.61,1.87,2.82l-1.71.4c-.3-.96-.75-1.65-1.33-2.09-.58-.44-1.31-.65-2.19-.65-1.01,0-1.85.24-2.53.73-.68.48-1.15,1.13-1.43,1.95-.27.82-.41,1.66-.41,2.52,0,1.12.16,2.09.49,2.93.33.83.83,1.46,1.52,1.87.69.41,1.43.62,2.23.62.97,0,1.8-.28,2.47-.84s1.13-1.39,1.37-2.5Z"
          />
          <motion.path
            variants={drawPath}
            initial="initial"
            animate="animate"
            strokeWidth={0.5}
            className="fill-none stroke-light-foreground"
            d="m77.77,15.7V4.12h-4.33v-1.55h10.41v1.55h-4.35v11.58h-1.74Z"
          />
          <motion.path
            variants={drawPath}
            initial="initial"
            animate="animate"
            strokeWidth={0.5}
            className="fill-none stroke-light-foreground"
            d="m115.7,15.7V2.57h4.52c1.02,0,1.8.06,2.34.19.75.17,1.39.49,1.93.94.69.59,1.21,1.33,1.55,2.24.34.91.52,1.95.52,3.12,0,1-.12,1.88-.35,2.65-.23.77-.53,1.41-.9,1.91-.36.5-.76.9-1.2,1.19-.43.29-.96.51-1.57.66-.61.15-1.32.22-2.11.22h-4.74Zm1.74-1.55h2.8c.87,0,1.55-.08,2.04-.24s.89-.39,1.18-.68c.41-.41.73-.97.96-1.66s.35-1.54.35-2.53c0-1.37-.23-2.43-.68-3.17-.45-.74-1-1.23-1.64-1.48-.47-.18-1.22-.27-2.25-.27h-2.76v10.04Z"
          />
          <motion.path
            variants={drawPath}
            initial="initial"
            animate="animate"
            strokeWidth={0.5}
            className="fill-none stroke-light-foreground"
            d="m128.98,15.7V2.57h9.5v1.55h-7.76v4.02h7.27v1.54h-7.27v4.47h8.06v1.55h-9.8Z"
          />
          <motion.path
            variants={drawPath}
            initial="initial"
            animate="animate"
            strokeWidth={0.5}
            className="fill-none stroke-light-foreground"
            d="m144.94,15.7l-5.09-13.13h1.88l3.41,9.54c.27.76.5,1.48.69,2.15.2-.72.44-1.43.71-2.15l3.55-9.54h1.77l-5.14,13.13h-1.78Z"
          />
        </g>
      </g>
    </motion.svg>
  );
};

export default AnimatedLogo;
