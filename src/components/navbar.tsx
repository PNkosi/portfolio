"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { PiGithubLogo, PiGlobe, PiLinkedinLogo } from "react-icons/pi";
import { slideRight, slideTop } from "@/lib/framer-motion-variants";
import AnimatedLogo from "./animated-illustrations/animated-logo";
import Button from "./ui/button";
import { menuLinks } from "@/lib/portfolio-data";
import { BiArrowFromLeft } from "react-icons/bi";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  return (
    <motion.nav
      className="z-50 bg-bg-purple text-white w-full mx-auto sticky top-0"
      variants={slideTop}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", stiffness: 500 }}
    >

      {/* Displays an overlay over the whole page when the mobile menu is toggled */}
      {isMenuOpen && (
        <div
          className="absolute top-[10vh] left-[0] h-[90dvh] w-full bg-slate-900/80" 
          onClick={handleClick}
        />
      )}
      <div className="container h-[10dvh] px-4 flex items-center justify-between">
        <Link href="/#home" className="flex items-center gap-2">
          {/* <AnimatedLogo /> */}
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between gap-8 text-light-foreground text-sm">
          {menuLinks.map(({ icon: Icon, label, href }, index) => (
            <motion.span
              key={index}
              className=""
              animate={{ origin: 0 }}
              transition={{ type: "spring", stiffness: 500 }}
              whileHover={{ scale: 1.25 }}
            >
              <Link key={index} href={href} className="flex items-center gap-2">
                {label}
                {Icon ? <Icon /> : ""}
              </Link>
            </motion.span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://github.com/PNkosi" target="_blank">
            <PiGithubLogo />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <PiLinkedinLogo />
          </Link>

          <Button
            className="bg-light-blue hidden md:flex items-center gap-2"
            size="sm"
          >
            Download Resume
            <BiArrowFromLeft />
          </Button>

          {/* Toggle Mobile Menu Button */}
          <button onClick={handleClick} className="md:hidden">
            <CiMenuFries />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-[10vh] right-0 py-8 px-12 flex flex-col gap-12 bg-dark-purple rounded-tl-3xl rounded-bl-3xl"
              variants={slideRight}
              initial="hidden"
              animate="visible"
              transition={{ type: "spring", stiffness: 500 }}
              exit={{ x: -100, opacity: 0, transition: { type: "just" } }}
            >
              {menuLinks.map(({ icon: Icon, label, href }, index) => (
                <motion.span
                  key={index}
                  className=""
                  animate={{ origin: 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  whileHover={{ scale: 1.5 }}
                >
                  <Link
                    key={index}
                    href={href}
                    className="flex items-center gap-2 hover:text-light-blue"
                    onClick={handleClick}
                  >
                    {label}
                    {Icon ? <Icon /> : ""}
                  </Link>
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
