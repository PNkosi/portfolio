import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
    className?: string;
    textVariant: 'light' | 'dark'
}

const SectionHeader = ({children, className, textVariant}: Props) => {
  return (
    <h2 className={`flex items-center gap-2 ${textVariant === "light" ? "text-light-foreground" : "text-dark-purple"} uppercase ${className}`}>
        {children}
      </h2>
  )
}

export default SectionHeader