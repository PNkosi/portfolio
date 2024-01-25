"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "sm" | "md" | "lg";
}

const Button = ({ children, size = "lg", className }: ButtonProps) => {
  return (
    <motion.button
      className={`${className} flex items-center gap-2 ${
        size === "sm" ? "p-2" : size === "md" ? "px-4 py-4" : "px-5 py-4"
      } rounded-xl`}
      animate={{ origin: 0 }}
      transition={{ type: "spring", stiffness: 500 }}
      whileHover={{ scale: 1.15 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
