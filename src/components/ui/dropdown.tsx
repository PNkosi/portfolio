"use client";
import React, { ReactNode, useEffect, useRef } from "react";

type DropdownProps = {
  children: ReactNode;
};

const Dropdown = ({ children }: DropdownProps) => {
  return (
    <div data-dropdown="dropdown">
      {children}
    </div>
  );
};

interface DropdownTriggerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
}
export const DropdownTrigger = ({ children }: DropdownTriggerProps) => {
  const ref = useRef<HTMLDivElement | undefined>();
  useEffect(() => {
    const isChildOfDropdown =
      ref.current?.parentElement?.getAttribute("data-dropdown");
    if (!isChildOfDropdown)
      throw new Error("DropdownTrigger must be a child of Dropdown");
  }, []);

  return <div ref={ref}>{children}</div>;
};


/**
 * Dropdown content
 */
interface DropdownContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
}
export const DropdownContent = ({ children }: DropdownContentProps) => {
  const ref = useRef<HTMLDivElement | undefined>();
  useEffect(() => {
    const isChildOfDropdown =
      ref.current?.parentElement?.getAttribute("data-dropdown");
    if (!isChildOfDropdown)
      throw new Error("DropdownContent must be a child of Dropdown");
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default Dropdown;
