"use client";

import Image from "next/image";
import React, { useState } from "react";
import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import { bounceOnHover } from "@/lib/framer-motion-variants";
import Link from "next/link";

type CarouselProps = {
  images: string[];
  showControls?: boolean;
  showLabel?: boolean;
  link?: string;
};

const Carousel = ({
  images,
  showControls = true,
  showLabel = true,
  link,
}: CarouselProps) => {
  const [slide, setSlide] = useState(0);

  const previousSlide = () => {
    if (slide === 0) {
      setSlide(images.length - 1);
      return;
    }
    setSlide((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (slide === images.length - 1) {
      setSlide(0);
      return;
    }
    setSlide((prev) => prev + 1);
  };

  const slides = images.map((img, index) => {
    const Img = (
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "tween" }}
        whileHover={{ scale: 1.05 }}
        exit={{ x: -100, opacity: 0 }}
      >
        <Image className="h-full w-full" src={img} alt="image" width={640} height={768} />
      </motion.div>
    );

    if (link) {
      return (
        <AnimatePresence key={index}>
          <Link href={link}>{Img}</Link>
        </AnimatePresence>
      );
    }

    return <AnimatePresence key={index}>{Img}</AnimatePresence>;
  });

  return (
    <motion.div
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 500 }}
      className="relative"
    >
      {slides[slide]}

      {showLabel && (
        <p className="absolute top-0 right-0 bg-slate-100 p-2 bg-opacity-70 rounded-bl-2xl">
          {slide + 1} of {images.length}
        </p>
      )}
      {showControls ? (
        <React.Fragment>
          <button
            className="absolute top-1/2 left-5 -translate-y-1/2 text-white bg-purple-950
       bg-opacity-70 rounded-full"
            onClick={previousSlide}
          >
            <PiCaretLeftThin size={50} />
          </button>
          <button
            className="absolute top-1/2 right-5 -translate-y-1/2 text-white bg-purple-950
       bg-opacity-70 rounded-full"
            onClick={nextSlide}
          >
            <PiCaretRightThin size={50} />
          </button>
        </React.Fragment>
      ) : null}

      <div className="flex gap-2 justify-center mt-4">
        {images.map((img, index) => (
          <motion.div
            variants={bounceOnHover}
            animate="animate"
            whileHover="hover"
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              slide === index ? "bg-bg-purple" : "bg-purple-400"
            }`}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Carousel;
